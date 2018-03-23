define(['dart_sdk', 'packages/server_communication/src/toh/hero', 'packages/http/src/base_client'], function(dart_sdk, hero, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__toh__hero = hero.src__toh__hero;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__toh__hero_service = Object.create(_root);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToHero = () => (dynamicToHero = dart.constFn(dart.fnType(src__toh__hero.Hero, [dart.dynamic])))();
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__toh__hero.Hero)))();
  let FutureOrOfListOfHero = () => (FutureOrOfListOfHero = dart.constFn(async.FutureOr$(ListOfHero())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  const _http = Symbol('_http');
  const _extractData = Symbol('_extractData');
  const _handleError = Symbol('_handleError');
  src__toh__hero_service.HeroService = class HeroService extends core.Object {
    getAll() {
      return async.async(ListOfHero(), (function* getAll() {
        try {
          let response = (yield this[_http].get("api/heroes"));
          let heroes = dart.dsend(dart.dsend(this[_extractData](response), 'map', dart.fn(value => src__toh__hero.Hero.fromJson(MapOfString$dynamic()._check(value)), dynamicToHero())), 'toList');
          return FutureOrOfListOfHero()._check(heroes);
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    create(name) {
      return async.async(src__toh__hero.Hero, (function* create() {
        try {
          let response = (yield this[_http].post("api/heroes", {headers: src__toh__hero_service.HeroService._headers, body: convert.json.encode(new (IdentityMapOfString$String()).from(['name', name]))}));
          return src__toh__hero.Hero.fromJson(MapOfString$dynamic()._check(this[_extractData](response)));
        } catch (e) {
          dart.throw(this[_handleError](e));
        }
      }).bind(this));
    }
    [_extractData](resp) {
      return dart.dindex(convert.json.decode(resp.body), 'data');
    }
    [_handleError](e) {
      core.print(e);
      return core.Exception.new(dart.str`Server error; cause: ${e}`);
    }
  };
  (src__toh__hero_service.HeroService.new = function(http) {
    this[_http] = http;
  }).prototype = src__toh__hero_service.HeroService.prototype;
  dart.addTypeTests(src__toh__hero_service.HeroService);
  dart.setMethodSignature(src__toh__hero_service.HeroService, () => ({
    __proto__: dart.getMethods(src__toh__hero_service.HeroService.__proto__),
    getAll: dart.fnType(async.Future$(core.List$(src__toh__hero.Hero)), []),
    create: dart.fnType(async.Future$(src__toh__hero.Hero), [core.String]),
    [_extractData]: dart.fnType(dart.dynamic, [src__response.Response]),
    [_handleError]: dart.fnType(core.Exception, [dart.dynamic])
  }));
  dart.setFieldSignature(src__toh__hero_service.HeroService, () => ({
    __proto__: dart.getFields(src__toh__hero_service.HeroService.__proto__),
    [_http]: dart.finalFieldType(src__client.Client)
  }));
  dart.defineLazy(src__toh__hero_service.HeroService, {
    /*src__toh__hero_service.HeroService._headers*/get _headers() {
      return new (IdentityMapOfString$String()).from(['Content-Type', 'application/json']);
    },
    /*src__toh__hero_service.HeroService._heroesUrl*/get _heroesUrl() {
      return 'api/heroes';
    }
  });
  dart.trackLibraries("packages/server_communication/src/toh/hero_service.ddc", {
    "package:server_communication/src/toh/hero_service.dart": src__toh__hero_service
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAgB8B;AAC1B,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,IAAI,CAAC,YAAU;AAC3C,cAAM,+BAAS,kBAAY,CAAC,QAAQ,UAC3B,QAAC,KAAK,IAAK,AAAI,4BAAa,8BAAC,KAAK;AAE3C,+CAAO,MAAM;iBACN;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;WAEoB,IAAW;AAAE;AAC/B,YAAI;AACF,cAAM,YAAW,MAAM,WAAK,KAAK,CAAC,YAAU,YAC/B,2CAAQ,QAAQ,YAAI,OAAO,CAAC,yCAAC,QAAQ,IAAI;AACtD,gBAAO,AAAI,6BAAa,8BAAC,kBAAY,CAAC,QAAQ;iBACvC;AAAG,AACV,qBAAM,kBAAY,CAAC,CAAC;;MAExB;;mBAEqB,IAAa;yBAAK,YAAI,OAAO,CAAC,IAAI,KAAK,GAAE;IAAO;mBAE9C,CAAS;AAC9B,gBAAK,CAAC,CAAC;AACP,YAAO,AAAI,mBAAS,CAAC,gCAAuB,CAAC;IAC/C;;qDA7BiB,IAAK;IAAL,WAAK,GAAL,IAAK;EAAC;;;;;;;;;;;;;;MAJV,2CAAQ;YAAG,0CAAC,gBAAgB;;MAC5B,6CAAU;YAAG","file":"hero_service.ddc.js"}');
  // Exports:
  return {
    src__toh__hero_service: src__toh__hero_service
  };
});

//# sourceMappingURL=hero_service.ddc.js.map
