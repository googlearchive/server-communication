define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/server_communication/src/toh/hero_list_component.template', 'packages/http/src/base_client', 'packages/server_communication/src/toh/hero_service', 'packages/server_communication/src/toh/hero_list_component', 'packages/server_communication/src/wiki/wiki_component.template', 'packages/server_communication/src/wiki/wikipedia_service', 'packages/server_communication/src/wiki/wiki_component', 'packages/server_communication/src/wiki/wiki_smart_component.template', 'packages/server_communication/src/wiki/wiki_smart_component', 'packages/server_communication/app_component', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, hero_list_component, base_client, hero_service, hero_list_component$, wiki_component, wikipedia_service, wiki_component$, wiki_smart_component, wiki_smart_component$, app_component, app_view, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__toh__hero_list_component$46template = hero_list_component.src__toh__hero_list_component$46template;
  const src__client = base_client.src__client;
  const src__toh__hero_service = hero_service.src__toh__hero_service;
  const src__toh__hero_list_component = hero_list_component$.src__toh__hero_list_component;
  const src__wiki__wiki_component$46template = wiki_component.src__wiki__wiki_component$46template;
  const src__wiki__wikipedia_service = wikipedia_service.src__wiki__wikipedia_service;
  const src__wiki__wiki_component = wiki_component$.src__wiki__wiki_component;
  const src__wiki__wiki_smart_component$46template = wiki_smart_component.src__wiki__wiki_smart_component$46template;
  const src__wiki__wiki_smart_component = wiki_smart_component$.src__wiki__wiki_smart_component;
  const app_component$ = app_component.app_component;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _HeroService_0_5 = Symbol('_HeroService_0_5');
  const _HeroListComponent_0_6 = Symbol('_HeroListComponent_0_6');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _WikipediaService_1_5 = Symbol('_WikipediaService_1_5');
  const _WikiComponent_1_6 = Symbol('_WikiComponent_1_6');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _WikipediaService_2_5 = Symbol('_WikipediaService_2_5');
  const _WikiSmartComponent_2_6 = Symbol('_WikiSmartComponent_2_6');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__toh__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_HeroService_0_5] = new src__toh__hero_service.HeroService.new(src__client.Client._check(this.parentView.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_HeroListComponent_0_6] = new src__toh__hero_list_component.HeroListComponent.new(this[_HeroService_0_5]);
      this[_compView_0].create(this[_HeroListComponent_0_6], []);
      this[_compView_1] = new src__wiki__wiki_component$46template.ViewWikiComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this[_WikipediaService_1_5] = new src__wiki__wikipedia_service.WikipediaService.new();
      this[_WikiComponent_1_6] = new src__wiki__wiki_component.WikiComponent.new(this[_WikipediaService_1_5]);
      this[_compView_1].create(this[_WikiComponent_1_6], []);
      this[_compView_2] = new src__wiki__wiki_smart_component$46template.ViewWikiSmartComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this[_WikipediaService_2_5] = new src__wiki__wikipedia_service.WikipediaService.new();
      this[_WikiSmartComponent_2_6] = new src__wiki__wiki_smart_component.WikiSmartComponent.new(this[_WikipediaService_2_5]);
      this[_compView_2].create(this[_WikiSmartComponent_2_6], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__toh__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5];
      }
      if (token === dart.wrapType(src__wiki__wikipedia_service.WikipediaService) && 1 === nodeIndex) {
        return this[_WikipediaService_1_5];
      }
      if (token === dart.wrapType(src__wiki__wikipedia_service.WikipediaService) && 2 === nodeIndex) {
        return this[_WikipediaService_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroListComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_2];
      t$0 == null ? null : t$0.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_HeroService_0_5] = null;
    this[_HeroListComponent_0_6] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_WikipediaService_1_5] = null;
    this[_WikiComponent_1_6] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_WikipediaService_2_5] = null;
    this[_WikiSmartComponent_2_6] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__toh__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroService_0_5]: dart.fieldType(src__toh__hero_service.HeroService),
    [_HeroListComponent_0_6]: dart.fieldType(src__toh__hero_list_component.HeroListComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__wiki__wiki_component$46template.ViewWikiComponent0),
    [_WikipediaService_1_5]: dart.fieldType(src__wiki__wikipedia_service.WikipediaService),
    [_WikiComponent_1_6]: dart.fieldType(src__wiki__wiki_component.WikiComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__wiki__wiki_smart_component$46template.ViewWikiSmartComponent0),
    [_WikipediaService_2_5]: dart.fieldType(src__wiki__wikipedia_service.WikipediaService),
    [_WikiSmartComponent_2_6]: dart.fieldType(src__wiki__wiki_smart_component.WikiSmartComponent)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__toh__hero_list_component$46template.initReflector();
    src__wiki__wiki_component$46template.initReflector();
    src__wiki__wiki_smart_component$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/server_communication/app_component.template.ddc", {
    "package:server_communication/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
