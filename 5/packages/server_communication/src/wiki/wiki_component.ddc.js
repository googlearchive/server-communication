define(['dart_sdk', 'packages/server_communication/src/wiki/wikipedia_service'], function(dart_sdk, wikipedia_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__wiki__wikipedia_service = wikipedia_service.src__wiki__wikipedia_service;
  const _root = Object.create(null);
  const src__wiki__wiki_component = Object.create(_root);
  const _wikipediaService = Symbol('_wikipediaService');
  src__wiki__wiki_component.WikiComponent = class WikiComponent extends core.Object {
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    search(term) {
      return async.async(dart.dynamic, (function* search() {
        this.items = (yield this[_wikipediaService].search(term));
      }).bind(this));
    }
  };
  (src__wiki__wiki_component.WikiComponent.new = function(wikipediaService) {
    this[items] = [];
    this[_wikipediaService] = wikipediaService;
  }).prototype = src__wiki__wiki_component.WikiComponent.prototype;
  dart.addTypeTests(src__wiki__wiki_component.WikiComponent);
  const items = Symbol("WikiComponent.items");
  dart.setMethodSignature(src__wiki__wiki_component.WikiComponent, () => ({
    __proto__: dart.getMethods(src__wiki__wiki_component.WikiComponent.__proto__),
    search: dart.fnType(async.Future, [core.String])
  }));
  dart.setFieldSignature(src__wiki__wiki_component.WikiComponent, () => ({
    __proto__: dart.getFields(src__wiki__wiki_component.WikiComponent.__proto__),
    [_wikipediaService]: dart.finalFieldType(src__wiki__wikipedia_service.WikipediaService),
    items: dart.fieldType(core.List)
  }));
  dart.trackLibraries("packages/server_communication/src/wiki/wiki_component.ddc", {
    "package:server_communication/src/wiki/wiki_component.dart": src__wiki__wiki_component
  }, '{"version":3,"sourceRoot":"","sources":["wiki_component.dart"],"names":[],"mappings":";;;;;;;;;;;IAqBO;;;;;;WAIS,IAAW;AAAE;AACzB,kBAAK,IAAG,MAAM,uBAAsB,OAAO,CAAC,IAAI;MAClD;;;0DAJmB,gBAAiB;IAF/B,WAAK,GAAG;IAEM,uBAAiB,GAAjB,gBAAiB;EAAC","file":"wiki_component.ddc.js"}');
  // Exports:
  return {
    src__wiki__wiki_component: src__wiki__wiki_component
  };
});

//# sourceMappingURL=wiki_component.ddc.js.map
