// Copyright (c) 2016, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.
import 'dart:html';
import 'dart:js';
import 'dart:async';

int _requestId = 0;

_createId() => '__dart_jsonp__req__${_requestId++}';

class JsonpCall {
  final ScriptElement script = new ScriptElement();
  final String callback = _createId();
  Uri uri;

  JsonpCall(dynamic uri) {
    this.uri = _createUri(uri, callback);
  }

  Future<dynamic> call() {
    Completer completer = new Completer();
    context[callback] = completer.complete;
    script.src = uri.toString();
    script.onError.listen((_) {
      completer.completeError('Failed to load $uri');
    });
    document.body.append(script);
    return completer.future.then(_onValue, onError: _onError);
  }

  dynamic _onValue(dynamic data) {
    _cleanup();
    return data;
  }

  Future _onError(e) {
    _cleanup();
    return new Future.error(e);
  }

  void _cleanup() {
    script.remove();
    context.deleteProperty(callback);
  }

  Uri _createUri(dynamic uri, String callback) {
    uri = (uri is Uri) ? uri : Uri.parse(uri);
    Map parameters = new Map.from(uri.queryParameters);
    parameters['callback'] = callback;
    return uri.replace(queryParameters: parameters);
  }
}
