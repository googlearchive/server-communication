define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/server_communication/src/toh/hero_list_component', 'packages/server_communication/src/toh/hero', 'packages/http/src/base_client', 'packages/server_communication/src/toh/hero_service', 'packages/angular/src/di/reflector', 'packages/server_communication/src/toh/hero.template', 'packages/server_communication/src/toh/hero_service.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, ng_if, hero_list_component, hero, base_client, hero_service, reflector, hero$, hero_service$, angular) {
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
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__toh__hero_list_component = hero_list_component.src__toh__hero_list_component;
  const src__toh__hero = hero.src__toh__hero;
  const src__client = base_client.src__client;
  const src__toh__hero_service = hero_service.src__toh__hero_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__toh__hero$46template = hero$.src__toh__hero$46template;
  const src__toh__hero_service$46template = hero_service$.src__toh__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__toh__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__toh__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__toh__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__toh__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__toh__hero_list_component$46template, {
    /*src__toh__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList(['.error._ngcontent-%COMP% { color:red; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _appEl_11 = Symbol('_appEl_11');
  const _NgIf_11_9 = Symbol('_NgIf_11_9');
  const _expr_0 = Symbol('_expr_0');
  const _handle_click_9_0 = Symbol('_handle_click_9_0');
  let const$;
  src__toh__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__toh__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Tour of Heroes');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('Heroes:');
      this[_el_2][$append](_text_3);
      this[_el_4] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_4][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], src__toh__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'label', parentRenderNode);
      this.addShimE(this[_el_6]);
      let _text_7 = html.Text.new('New hero name:');
      this[_el_6][$append](_text_7);
      this[_el_8] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_6]));
      this.addShimC(this[_el_8]);
      this[_el_9] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      this.addShimC(this[_el_9]);
      let _text_10 = html.Text.new('Add Hero');
      this[_el_9][$append](_text_10);
      let _anchor_11 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_11);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, null, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], src__toh__hero_list_component$46template.viewFactory_HeroListComponent2);
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      this[_el_9][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_9_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_5_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_5_9].ngDoCheck();
      this[_NgIf_11_9].ngIf = _ctx.errorMessage != null;
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_11];
      t$ == null ? null : t$.destroyNestedViews();
    }
    [_handle_click_9_0]($event) {
      let local_newHeroName = this[_el_8];
      this.ctx.add(local_newHeroName.value);
      local_newHeroName.value = '';
    }
  };
  (src__toh__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_expr_0] = null;
    src__toh__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-list'));
    let t = src__toh__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__toh__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__toh__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__toh__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__toh__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__toh__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__toh__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__toh__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__toh__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_click_9_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__toh__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__toh__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.UListElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_6]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.InputElement),
    [_el_9]: dart.fieldType(html.ButtonElement),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__toh__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__toh__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__toh__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__toh__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__toh__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _text_1 = Symbol('_text_1');
  src__toh__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__toh__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__toh__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__toh__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__toh__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__toh__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__toh__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__toh__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__toh__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__toh__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__toh__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__toh__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__toh__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__toh__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__toh__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__toh__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  src__toh__hero_list_component$46template._ViewHeroListComponent2 = class _ViewHeroListComponent2 extends src__core__linker__app_view.AppView$(src__toh__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('p');
      this[_el_0].className = 'error';
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.errorMessage;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__toh__hero_list_component$46template._ViewHeroListComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__toh__hero_list_component$46template._ViewHeroListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__toh__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__toh__hero_list_component$46template._ViewHeroListComponent2.prototype;
  dart.addTypeTests(src__toh__hero_list_component$46template._ViewHeroListComponent2);
  dart.setMethodSignature(src__toh__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getMethods(src__toh__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__toh__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__toh__hero_list_component$46template._ViewHeroListComponent2, () => ({
    __proto__: dart.getFields(src__toh__hero_list_component$46template._ViewHeroListComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__toh__hero_list_component$46template.viewFactory_HeroListComponent2 = function(parentView, parentIndex) {
    return new src__toh__hero_list_component$46template._ViewHeroListComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__toh__hero_list_component$46template.viewFactory_HeroListComponent2, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__toh__hero_list_component$46template, {
    /*src__toh__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroService_0_5 = Symbol('_HeroService_0_5');
  const _HeroListComponent_0_6 = Symbol('_HeroListComponent_0_6');
  src__toh__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__toh__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroService_0_5] = new src__toh__hero_service.HeroService.new(src__client.Client._check(this.injectorGet(dart.wrapType(src__client.Client), this.viewData.parentIndex)));
      this[_HeroListComponent_0_6] = new src__toh__hero_list_component.HeroListComponent.new(this[_HeroService_0_5]);
      this[_compView_0].create(this[_HeroListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__toh__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_HeroListComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__toh__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroService_0_5] = null;
    this[_HeroListComponent_0_6] = null;
    src__toh__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__toh__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__toh__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__toh__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__toh__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__toh__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__toh__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__toh__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroService_0_5]: dart.fieldType(src__toh__hero_service.HeroService),
    [_HeroListComponent_0_6]: dart.fieldType(src__toh__hero_list_component.HeroListComponent)
  }));
  src__toh__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__toh__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__toh__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__toh__hero_list_component$46template, {
    /*src__toh__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('hero-list', src__toh__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__toh__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__toh__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__toh__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__toh__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__toh__hero_list_component$46template._visited)) {
      return;
    }
    src__toh__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__toh__hero_list_component.HeroListComponent), src__toh__hero_list_component$46template.HeroListComponentNgFactory);
    src__toh__hero$46template.initReflector();
    src__toh__hero_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__toh__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/server_communication/src/toh/hero_list_component.template.ddc", {
    "package:server_communication/src/toh/hero_list_component.template.dart": src__toh__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":"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","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__toh__hero_list_component$46template: src__toh__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
