define(['dart_sdk', 'packages/jsonpadding/src/jsonp_call'], function(dart_sdk, jsonp_call) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__jsonp_call = jsonp_call.src__jsonp_call;
  const _root = Object.create(null);
  const jsonpadding = Object.create(_root);
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  jsonpadding.jsonp = function(uri) {
    return new src__jsonp_call.JsonpCall.new(uri).call();
  };
  dart.fn(jsonpadding.jsonp, dynamicToFuture());
  jsonpadding.Jsonp = class Jsonp extends core.Object {
    get(uri) {
      return jsonpadding.jsonp(uri);
    }
  };
  (jsonpadding.Jsonp.new = function() {
  }).prototype = jsonpadding.Jsonp.prototype;
  dart.addTypeTests(jsonpadding.Jsonp);
  dart.setMethodSignature(jsonpadding.Jsonp, () => ({
    __proto__: dart.getMethods(jsonpadding.Jsonp.__proto__),
    get: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.trackLibraries("packages/jsonpadding/jsonpadding.ddc", {
    "package:jsonpadding/jsonpadding.dart": jsonpadding
  }, '{"version":3,"sourceRoot":"","sources":["jsonpadding.dart"],"names":[],"mappings":";;;;;;;;;;+BAKsB,GAAW;UAAK,KAAI,6BAAS,CAAC,GAAG,MAAM;EAAE;;;QAGzC,GAAW;YAAK,kBAAK,CAAC,GAAG;IAAC;;;EAChD","file":"jsonpadding.ddc.js"}');
  // Exports:
  return {
    jsonpadding: jsonpadding
  };
});

//# sourceMappingURL=jsonpadding.ddc.js.map
