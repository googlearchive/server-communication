define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/server_communication/src/toh/hero_service', 'packages/http/src/base_client', 'packages/server_communication/src/toh/hero.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, hero_service, base_client, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__toh__hero_service = hero_service.src__toh__hero_service;
  const src__client = base_client.src__client;
  const src__toh__hero$46template = hero.src__toh__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__toh__hero_service$46template = Object.create(_root);
  let ClientToHeroService = () => (ClientToHeroService = dart.constFn(dart.fnType(src__toh__hero_service.HeroService, [src__client.Client])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__toh__hero_service$46template, {
    /*src__toh__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__toh__hero_service$46template.initReflector = function() {
    if (dart.test(src__toh__hero_service$46template._visited)) {
      return;
    }
    src__toh__hero_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__toh__hero_service.HeroService), dart.fn(p0 => new src__toh__hero_service.HeroService.new(p0), ClientToHeroService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__toh__hero_service.HeroService), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__client.Client)], core.Object))], ListOfObject())));
    src__toh__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__toh__hero_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/server_communication/src/toh/hero_service.template.ddc", {
    "package:server_communication/src/toh/hero_service.template.dart": src__toh__hero_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAiBI,0CAAQ;YAAG;;;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAO,kCAAe,CAAC,iDAAW,EAAE,QAAC,EAAa,IAAK,IAAI,sCAAW,CAAC,EAAE;AACzE,IAAO,uCAAoB,CAAC,iDAAW,EAAE,sCACvC,oCAAW,iCAAM;AAEnB,IAAM,uCAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service.template.ddc.js"}');
  // Exports:
  return {
    src__toh__hero_service$46template: src__toh__hero_service$46template
  };
});

//# sourceMappingURL=hero_service.template.ddc.js.map
