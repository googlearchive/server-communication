// Copyright (c) 2016, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.
import 'src/jsonp_call.dart';
import 'dart:async';

Future<dynamic> jsonp(dynamic uri) => new JsonpCall(uri).call();

class Jsonp {
  Future<dynamic> get(dynamic uri) => jsonp(uri);
}
