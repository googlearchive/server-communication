define(['dart_sdk', 'packages/server_communication/src/toh/hero', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/server_communication/src/toh/hero_service'], function(dart_sdk, hero, lifecycle_hooks, hero_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__toh__hero = hero.src__toh__hero;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__toh__hero_service = hero_service.src__toh__hero_service;
  const _root = Object.create(null);
  const src__toh__hero_list_component = Object.create(_root);
  const $toString = dartx.toString;
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__toh__hero.Hero)))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__toh__hero.Hero)))();
  const _heroService = Symbol('_heroService');
  const _getHeroes = Symbol('_getHeroes');
  src__toh__hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get errorMessage() {
      return this[errorMessage];
    }
    set errorMessage(value) {
      this[errorMessage] = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    ngOnInit() {
      return this[_getHeroes]();
    }
    [_getHeroes]() {
      return async.async(dart.void, (function* _getHeroes() {
        try {
          this.heroes = (yield this[_heroService].getAll());
        } catch (e) {
          this.errorMessage = dart.toString(e);
        }
      }).bind(this));
    }
    add(name) {
      return async.async(dart.void, (function* add() {
        name = name[$trim]();
        if (name[$isEmpty]) return null;
        try {
          this.heroes[$add](yield this[_heroService].create(name));
        } catch (e) {
          this.errorMessage = dart.toString(e);
        }
      }).bind(this));
    }
  };
  (src__toh__hero_list_component.HeroListComponent.new = function(heroService) {
    this[errorMessage] = null;
    this[heroes] = JSArrayOfHero().of([]);
    this[_heroService] = heroService;
  }).prototype = src__toh__hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(src__toh__hero_list_component.HeroListComponent);
  const errorMessage = Symbol("HeroListComponent.errorMessage");
  const heroes = Symbol("HeroListComponent.heroes");
  src__toh__hero_list_component.HeroListComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__toh__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getMethods(src__toh__hero_list_component.HeroListComponent.__proto__),
    ngOnInit: dart.fnType(async.Future$(dart.void), []),
    [_getHeroes]: dart.fnType(async.Future$(dart.void), []),
    add: dart.fnType(async.Future$(dart.void), [core.String])
  }));
  dart.setFieldSignature(src__toh__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(src__toh__hero_list_component.HeroListComponent.__proto__),
    [_heroService]: dart.finalFieldType(src__toh__hero_service.HeroService),
    errorMessage: dart.fieldType(core.String),
    heroes: dart.fieldType(ListOfHero())
  }));
  dart.trackLibraries("packages/server_communication/src/toh/hero_list_component.ddc", {
    "package:server_communication/src/toh/hero_list_component.dart": src__toh__hero_list_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAgBS;;;;;;IACI;;;;;;;YAIgB,iBAAU;IAAE;;AAEb;AACxB,YAAI;AACF,qBAAM,IAAG,MAAM,kBAAY,OAAO;iBAC3B;AAAG,AACV,2BAAY,iBAAG,CAAC;;MAEpB;;QAEiB,IAAW;AAAE;AAC5B,YAAI,GAAG,IAAI,OAAK;AAChB,YAAI,IAAI,UAAQ,EAAE,MAAO;AACzB,YAAI;AACF,qBAAM,MAAI,CAAC,MAAM,kBAAY,OAAO,CAAC,IAAI;iBAClC;AAAG,AACV,2BAAY,iBAAG,CAAC;;MAEpB;;;kEApBuB,WAAY;IAH5B,kBAAY;IACR,YAAM,GAAG;IAEG,kBAAY,GAAZ,WAAY;EAAC","file":"hero_list_component.ddc.js"}');
  // Exports:
  return {
    src__toh__hero_list_component: src__toh__hero_list_component
  };
});

//# sourceMappingURL=hero_list_component.ddc.js.map
