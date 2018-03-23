define(['dart_sdk', 'packages/jsonpadding/jsonpadding'], function(dart_sdk, jsonpadding) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const jsonpadding$ = jsonpadding.jsonpadding;
  const _root = Object.create(null);
  const src__wiki__wikipedia_service = Object.create(_root);
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let FutureOrOfListOfString = () => (FutureOrOfListOfString = dart.constFn(async.FutureOr$(ListOfString())))();
  src__wiki__wikipedia_service.WikipediaService = class WikipediaService extends core.Object {
    search(term) {
      return async.async(ListOfString(), function* search() {
        let uri = core.Uri.new({scheme: 'http', host: 'en.wikipedia.org', path: 'w/api.php', queryParameters: new (IdentityMapOfString$dynamic()).from(['search', term, 'action', 'opensearch', 'format', 'json'])});
        let result = core.List._check(yield jsonpadding$.jsonp(uri));
        return FutureOrOfListOfString()._check(result[$_get](1));
      });
    }
  };
  (src__wiki__wikipedia_service.WikipediaService.new = function() {
  }).prototype = src__wiki__wikipedia_service.WikipediaService.prototype;
  dart.addTypeTests(src__wiki__wikipedia_service.WikipediaService);
  dart.setMethodSignature(src__wiki__wikipedia_service.WikipediaService, () => ({
    __proto__: dart.getMethods(src__wiki__wikipedia_service.WikipediaService.__proto__),
    search: dart.fnType(async.Future$(core.List$(core.String)), [core.String])
  }));
  dart.trackLibraries("packages/server_communication/src/wiki/wikipedia_service.ddc", {
    "package:server_communication/src/wiki/wikipedia_service.dart": src__wiki__wikipedia_service
  }, '{"version":3,"sourceRoot":"","sources":["wikipedia_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;WAO8B,IAAW;AAAE;AACvC,YAAI,MAAM,AAAI,YAAG,UACL,cACF,0BACA,8BACW,0CACf,UAAU,IAAI,EACd,UAAU,cACV,UAAU;AAGhB,YAAK,0BAAS,MAAM,kBAAK,CAAC,GAAG;AAC7B,+CAAO,MAAM,QAAC;MAChB;;;;EACF","file":"wikipedia_service.ddc.js"}');
  // Exports:
  return {
    src__wiki__wikipedia_service: src__wiki__wikipedia_service
  };
});

//# sourceMappingURL=wikipedia_service.ddc.js.map
