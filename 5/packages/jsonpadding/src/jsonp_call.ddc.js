define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__jsonp_call = Object.create(_root);
  const $onError = dartx.onError;
  const $append = dartx.append;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  dart.defineLazy(src__jsonp_call, {
    /*src__jsonp_call._requestId*/get _requestId() {
      return 0;
    },
    set _requestId(_) {}
  });
  src__jsonp_call._createId = function() {
    return dart.str`__dart_jsonp__req__${(() => {
      let x = src__jsonp_call._requestId;
      src__jsonp_call._requestId = dart.notNull(x) + 1;
      return x;
    })()}`;
  };
  dart.fn(src__jsonp_call._createId, VoidTodynamic());
  const _createUri = Symbol('_createUri');
  const _onValue = Symbol('_onValue');
  const _onError = Symbol('_onError');
  const _cleanup = Symbol('_cleanup');
  src__jsonp_call.JsonpCall = class JsonpCall extends core.Object {
    get script() {
      return this[script];
    }
    set script(value) {
      super.script = value;
    }
    get callback() {
      return this[callback];
    }
    set callback(value) {
      super.callback = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      this[uri$] = value;
    }
    call() {
      let completer = async.Completer.new();
      js.context._set(this.callback, dart.bind(completer, 'complete'));
      this.script.src = dart.toString(this.uri);
      this.script[$onError].listen(dart.fn(_ => {
        completer.completeError(dart.str`Failed to load ${this.uri}`);
      }, EventToNull()));
      html.document.body[$append](this.script);
      return completer.future.then(dart.dynamic, dart.bind(this, _onValue), {onError: dart.bind(this, _onError)});
    }
    [_onValue](data) {
      this[_cleanup]();
      return data;
    }
    [_onError](e) {
      this[_cleanup]();
      return async.Future.error(e);
    }
    [_cleanup]() {
      this.script[$remove]();
      js.context.deleteProperty(this.callback);
    }
    [_createUri](uri, callback) {
      uri = core.Uri.is(uri) ? uri : core.Uri.parse(core.String._check(uri));
      let parameters = core.Map.from(core.Map._check(dart.dload(uri, 'queryParameters')));
      parameters[$_set]('callback', callback);
      return core.Uri._check(dart.dsend(uri, 'replace', {queryParameters: parameters}));
    }
  };
  src__jsonp_call.JsonpCall.prototype[dart._runtimeType] = src__jsonp_call.JsonpCall;
  (src__jsonp_call.JsonpCall.new = function callableClass(uri) {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self, uri);
      return self;
    }
    this[script] = html.ScriptElement.new();
    this[callback] = core.String._check(src__jsonp_call._createId());
    this[uri$] = null;
    this.uri = this[_createUri](uri, this.callback);
  }).prototype = src__jsonp_call.JsonpCall.prototype;
  dart.addTypeTests(src__jsonp_call.JsonpCall);
  const script = Symbol("JsonpCall.script");
  const callback = Symbol("JsonpCall.callback");
  const uri$ = Symbol("JsonpCall.uri");
  dart.setMethodSignature(src__jsonp_call.JsonpCall, () => ({
    __proto__: dart.getMethods(src__jsonp_call.JsonpCall.__proto__),
    call: dart.fnType(async.Future, []),
    [_onValue]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_onError]: dart.fnType(async.Future, [dart.dynamic]),
    [_cleanup]: dart.fnType(dart.void, []),
    [_createUri]: dart.fnType(core.Uri, [dart.dynamic, core.String])
  }));
  dart.setFieldSignature(src__jsonp_call.JsonpCall, () => ({
    __proto__: dart.getFields(src__jsonp_call.JsonpCall.__proto__),
    script: dart.finalFieldType(html.ScriptElement),
    callback: dart.finalFieldType(core.String),
    uri: dart.fieldType(core.Uri)
  }));
  dart.trackLibraries("packages/jsonpadding/src/jsonp_call.ddc", {
    "package:jsonpadding/src/jsonp_call.dart": src__jsonp_call
  }, '{"version":3,"sourceRoot":"","sources":["jsonp_call.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAMI,0BAAU;YAAG;;;;;UAEF;cAAsB,0BAAU;qDAR/C;;;EAQmD;;;;;;;IAG7B;;;;;;IACP;;;;;;IACT;;;;;;;AAOF,UAAU,YAAY,AAAI,mBAAS;AACnC,gBAAO,MAAC,aAAQ,YAAI,SAAS;AAC7B,iBAAM,IAAI,iBAAG,QAAG;AAChB,iBAAM,UAAQ,OAAO,CAAC,QAAC,CAAC;AACtB,iBAAS,cAAc,CAAC,0BAAiB,QAAG;;AAE9C,mBAAQ,KAAK,SAAO,CAAC,WAAM;AAC3B,YAAO,UAAS,OAAO,KAAK,eAAC,yBAAQ,YAAW,yBAAQ;IAC1D;eAEiB,IAAY;AAC3B,oBAAQ;AACR,YAAO,KAAI;IACb;eAEgB,CAAC;AACf,oBAAQ;AACR,YAAO,AAAI,mBAAY,CAAC,CAAC;IAC3B;;AAGE,iBAAM,SAAO;AACb,gBAAO,eAAe,CAAC,aAAQ;IACjC;iBAEe,GAAW,EAAE,QAAe;AACzC,SAAG,GAAG,YAAC,GAAG,IAAW,GAAG,GAAG,QAAG,MAAM,oBAAC,GAAG;AACxC,UAAI,aAAa,AAAI,aAAQ,4BAAC,GAAG;AACjC,gBAAU,QAAC,YAAc,QAAQ;AACjC,wCAAO,GAAG,+BAA0B,UAAU;IAChD;;;0DAnCU,GAAW;;;;;;+BAAX,GAAW;;;IAJD,YAAM,GAAG,AAAI,sBAAa;IACjC,cAAQ,sBAAG,yBAAS;IAC7B,UAAG;AAGL,YAAQ,GAAG,gBAAU,CAAC,GAAG,EAAE,aAAQ;EACrC","file":"jsonp_call.ddc.js"}');
  // Exports:
  return {
    src__jsonp_call: src__jsonp_call
  };
});

//# sourceMappingURL=jsonp_call.ddc.js.map
