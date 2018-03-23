define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/server_communication/src/wiki/wikipedia_service', 'packages/angular/angular.template'], function(dart_sdk, reflector, wikipedia_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__wiki__wikipedia_service = wikipedia_service.src__wiki__wikipedia_service;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__wiki__wikipedia_service$46template = Object.create(_root);
  let VoidToWikipediaService = () => (VoidToWikipediaService = dart.constFn(dart.fnType(src__wiki__wikipedia_service.WikipediaService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__wiki__wikipedia_service$46template, {
    /*src__wiki__wikipedia_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__wiki__wikipedia_service$46template.initReflector = function() {
    if (dart.test(src__wiki__wikipedia_service$46template._visited)) {
      return;
    }
    src__wiki__wikipedia_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__wiki__wikipedia_service.WikipediaService), dart.fn(() => new src__wiki__wikipedia_service.WikipediaService.new(), VoidToWikipediaService()));
    angular$46template.initReflector();
  };
  dart.fn(src__wiki__wikipedia_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/server_communication/src/wiki/wikipedia_service.template.ddc", {
    "package:server_communication/src/wiki/wikipedia_service.template.dart": src__wiki__wikipedia_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["wikipedia_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAaI,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,kCAAe,CAAC,4DAAgB,EAAE,cAAM,IAAI,iDAAgB;AACnE,IAAM,gCAAa;EACrB","file":"wikipedia_service.template.ddc.js"}');
  // Exports:
  return {
    src__wiki__wikipedia_service$46template: src__wiki__wikipedia_service$46template
  };
});

//# sourceMappingURL=wikipedia_service.template.ddc.js.map
