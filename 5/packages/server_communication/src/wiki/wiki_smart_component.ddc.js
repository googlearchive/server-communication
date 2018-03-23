define(['dart_sdk', 'packages/stream_transform/src/switch', 'packages/stream_transform/src/debounce', 'packages/server_communication/src/wiki/wikipedia_service'], function(dart_sdk, $switch, debounce, wikipedia_service) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__switch = $switch.src__switch;
  const src__debounce = debounce.src__debounce;
  const src__wiki__wikipedia_service = wikipedia_service.src__wiki__wikipedia_service;
  const _root = Object.create(null);
  const src__wiki__wiki_smart_component = Object.create(_root);
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfStringToNull = () => (ListOfStringToNull = dart.constFn(dart.fnType(core.Null, [ListOfString()])))();
  let StreamOfListOfString = () => (StreamOfListOfString = dart.constFn(async.Stream$(ListOfString())))();
  let StringToStreamOfListOfString = () => (StringToStreamOfListOfString = dart.constFn(dart.fnType(StreamOfListOfString(), [core.String])))();
  const _wikipediaService = Symbol('_wikipediaService');
  const _onSearchTerm = Symbol('_onSearchTerm');
  src__wiki__wiki_smart_component.WikiSmartComponent = class WikiSmartComponent extends core.Object {
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    search(term) {
      return this[_onSearchTerm].add(term);
    }
  };
  (src__wiki__wiki_smart_component.WikiSmartComponent.new = function(wikipediaService) {
    this[items] = [];
    this[_onSearchTerm] = StreamControllerOfString().new();
    this[_wikipediaService] = wikipediaService;
    this[_onSearchTerm].stream.transform(core.String, src__debounce.debounce(core.String, new core.Duration.new({milliseconds: 300}))).distinct().transform(ListOfString(), src__switch.switchMap(core.String, ListOfString(), dart.fn(term => this[_wikipediaService].search(term).asStream(), StringToStreamOfListOfString()))).forEach(dart.fn(data => {
      this.items = data;
    }, ListOfStringToNull()));
  }).prototype = src__wiki__wiki_smart_component.WikiSmartComponent.prototype;
  dart.addTypeTests(src__wiki__wiki_smart_component.WikiSmartComponent);
  const items = Symbol("WikiSmartComponent.items");
  dart.setMethodSignature(src__wiki__wiki_smart_component.WikiSmartComponent, () => ({
    __proto__: dart.getMethods(src__wiki__wiki_smart_component.WikiSmartComponent.__proto__),
    search: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__wiki__wiki_smart_component.WikiSmartComponent, () => ({
    __proto__: dart.getFields(src__wiki__wiki_smart_component.WikiSmartComponent.__proto__),
    [_wikipediaService]: dart.finalFieldType(src__wiki__wikipedia_service.WikipediaService),
    items: dart.fieldType(core.List),
    [_onSearchTerm]: dart.finalFieldType(StreamControllerOfString())
  }));
  dart.trackLibraries("packages/server_communication/src/wiki/wiki_smart_component.ddc", {
    "package:server_communication/src/wiki/wiki_smart_component.dart": src__wiki__wiki_smart_component
  }, '{"version":3,"sourceRoot":"","sources":["wiki_smart_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAsBO;;;;;;WAeO,IAAW;YAAK,oBAAa,IAAI,CAAC,IAAI;IAAC;;qEAb3B,gBAAiB;IAFpC,WAAK,GAAG;IAaP,mBAAa,GAAG,AAAI,8BAAwB;IAX1B,uBAAiB,GAAjB,gBAAiB;AACvC,uBAAa,OAAO,UACN,cAAC,sBAAQ,cAAC,IAAI,iBAAQ,gBAAe,gBACtC,YACC,iBACN,qBAAS,8BAAC,QAAC,IAAI,IAAK,uBAAiB,OAAO,CAAC,IAAI,UAAU,6CACvD,CAAC,QAAC,IAAI;AAChB,gBAAK,GAAG,IAAI;;EAEhB","file":"wiki_smart_component.ddc.js"}');
  // Exports:
  return {
    src__wiki__wiki_smart_component: src__wiki__wiki_smart_component
  };
});

//# sourceMappingURL=wiki_smart_component.ddc.js.map
