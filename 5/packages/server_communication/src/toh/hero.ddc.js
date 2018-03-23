define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__toh__hero = Object.create(_root);
  const $_get = dartx._get;
  let dynamicToint = () => (dynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic])))();
  src__toh__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    static fromJson(hero) {
      return new src__toh__hero.Hero.new(src__toh__hero._toInt(hero[$_get]('id')), core.String._check(hero[$_get]('name')));
    }
    toJson() {
      return new _js_helper.LinkedMap.from(['id', this.id, 'name', this.name]);
    }
  };
  (src__toh__hero.Hero.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__toh__hero.Hero.prototype;
  dart.addTypeTests(src__toh__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  dart.setMethodSignature(src__toh__hero.Hero, () => ({
    __proto__: dart.getMethods(src__toh__hero.Hero.__proto__),
    toJson: dart.fnType(core.Map, [])
  }));
  dart.setFieldSignature(src__toh__hero.Hero, () => ({
    __proto__: dart.getFields(src__toh__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  src__toh__hero._toInt = function(id) {
    return core.int.is(id) ? id : core.int.parse(core.String._check(id));
  };
  dart.fn(src__toh__hero._toInt, dynamicToint());
  dart.trackLibraries("packages/server_communication/src/toh/hero.ddc", {
    "package:server_communication/src/toh/hero.dart": src__toh__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;;;;IACY;;;;;;IACH;;;;;;oBAIe,IAAyB;AAAE,YAC7C,KAAI,uBAAI,CAAC,qBAAM,CAAC,IAAI,QAAC,2BAAQ,IAAI,QAAC;IAAQ;;YAE9B,gCAAC,MAAM,OAAE,EAAE,QAAQ,SAAI;IAAC;;sCALnC,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;mCAQf,EAAE;uBAAK,EAAE,IAAU,EAAE,GAAG,QAAG,MAAM,oBAAC,EAAE;EAAC","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__toh__hero: src__toh__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
