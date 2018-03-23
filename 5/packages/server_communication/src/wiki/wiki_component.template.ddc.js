define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/server_communication/src/wiki/wiki_component', 'packages/server_communication/src/wiki/wikipedia_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/server_communication/src/wiki/wikipedia_service.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, wiki_component, wikipedia_service, reflector, angular, wikipedia_service$) {
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
  const src__wiki__wiki_component = wiki_component.src__wiki__wiki_component;
  const src__wiki__wikipedia_service = wikipedia_service.src__wiki__wikipedia_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__wiki__wikipedia_service$46template = wikipedia_service$.src__wiki__wikipedia_service$46template;
  const _root = Object.create(null);
  const src__wiki__wiki_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfWikiComponent = () => (AppViewOfWikiComponent = dart.constFn(src__core__linker__app_view.AppView$(src__wiki__wiki_component.WikiComponent)))();
  let AppViewAndintToAppViewOfWikiComponent = () => (AppViewAndintToAppViewOfWikiComponent = dart.constFn(dart.fnType(AppViewOfWikiComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfWikiComponent = () => (ComponentRefOfWikiComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__wiki__wiki_component.WikiComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfWikiComponent = () => (ComponentFactoryOfWikiComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__wiki__wiki_component.WikiComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__wiki__wiki_component$46template, {
    /*src__wiki__wiki_component$46template.styles$WikiComponent*/get styles$WikiComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgFor_7_9 = Symbol('_NgFor_7_9');
  const _expr_0 = Symbol('_expr_0');
  const _handle_keyup_5_0 = Symbol('_handle_keyup_5_0');
  let const$;
  src__wiki__wiki_component$46template.ViewWikiComponent0 = class ViewWikiComponent0 extends src__core__linker__app_view.AppView$(src__wiki__wiki_component.WikiComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      let _text_1 = html.Text.new('Wikipedia Demo');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'i', this[_el_2]);
      let _text_4 = html.Text.new('Fetches after each keystroke');
      this[_el_3][$append](_text_4);
      this[_el_5] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', parentRenderNode));
      this[_el_6] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      let _anchor_7 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_6][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 6, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], src__wiki__wiki_component$46template.viewFactory_WikiComponent1);
      this[_NgFor_7_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_7], _TemplateRef_7_8);
      this[_el_5][$addEventListener]('keyup', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_keyup_5_0)));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.items;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_7_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_7_9].ngDoCheck();
      this[_appEl_7].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_7];
      t == null ? null : t.destroyNestedViews();
    }
    [_handle_keyup_5_0]($event) {
      let local_term = this[_el_5];
      this.ctx.search(local_term.value);
    }
  };
  (src__wiki__wiki_component$46template.ViewWikiComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_appEl_7] = null;
    this[_NgFor_7_9] = null;
    this[_expr_0] = null;
    src__wiki__wiki_component$46template.ViewWikiComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-wiki'));
    let t = src__wiki__wiki_component$46template.ViewWikiComponent0._renderType;
    t == null ? src__wiki__wiki_component$46template.ViewWikiComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__wiki__wiki_component$46template.styles$WikiComponent) : t;
    this.setupComponentType(src__wiki__wiki_component$46template.ViewWikiComponent0._renderType);
  }).prototype = src__wiki__wiki_component$46template.ViewWikiComponent0.prototype;
  dart.addTypeTests(src__wiki__wiki_component$46template.ViewWikiComponent0);
  dart.setMethodSignature(src__wiki__wiki_component$46template.ViewWikiComponent0, () => ({
    __proto__: dart.getMethods(src__wiki__wiki_component$46template.ViewWikiComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__wiki__wiki_component.WikiComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_keyup_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__wiki__wiki_component$46template.ViewWikiComponent0, () => ({
    __proto__: dart.getFields(src__wiki__wiki_component$46template.ViewWikiComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.InputElement),
    [_el_6]: dart.fieldType(html.UListElement),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_7_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__wiki__wiki_component$46template.ViewWikiComponent0, {
    /*src__wiki__wiki_component$46template.ViewWikiComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__wiki__wiki_component$46template.viewFactory_WikiComponent0 = function(parentView, parentIndex) {
    return new src__wiki__wiki_component$46template.ViewWikiComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__wiki__wiki_component$46template.viewFactory_WikiComponent0, AppViewAndintToAppViewOfWikiComponent());
  const _text_1 = Symbol('_text_1');
  src__wiki__wiki_component$46template._ViewWikiComponent1 = class _ViewWikiComponent1 extends src__core__linker__app_view.AppView$(src__wiki__wiki_component.WikiComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_item = this.locals[$_get]('$implicit');
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__wiki__wiki_component$46template._ViewWikiComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__wiki__wiki_component$46template._ViewWikiComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__wiki__wiki_component$46template.ViewWikiComponent0._renderType;
  }).prototype = src__wiki__wiki_component$46template._ViewWikiComponent1.prototype;
  dart.addTypeTests(src__wiki__wiki_component$46template._ViewWikiComponent1);
  dart.setMethodSignature(src__wiki__wiki_component$46template._ViewWikiComponent1, () => ({
    __proto__: dart.getMethods(src__wiki__wiki_component$46template._ViewWikiComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__wiki__wiki_component.WikiComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__wiki__wiki_component$46template._ViewWikiComponent1, () => ({
    __proto__: dart.getFields(src__wiki__wiki_component$46template._ViewWikiComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__wiki__wiki_component$46template.viewFactory_WikiComponent1 = function(parentView, parentIndex) {
    return new src__wiki__wiki_component$46template._ViewWikiComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__wiki__wiki_component$46template.viewFactory_WikiComponent1, AppViewAndintToAppViewOfWikiComponent());
  dart.defineLazy(src__wiki__wiki_component$46template, {
    /*src__wiki__wiki_component$46template.styles$WikiComponentHost*/get styles$WikiComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _WikipediaService_0_5 = Symbol('_WikipediaService_0_5');
  const _WikiComponent_0_6 = Symbol('_WikiComponent_0_6');
  src__wiki__wiki_component$46template._ViewWikiComponentHost0 = class _ViewWikiComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__wiki__wiki_component$46template.ViewWikiComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_WikipediaService_0_5] = new src__wiki__wikipedia_service.WikipediaService.new();
      this[_WikiComponent_0_6] = new src__wiki__wiki_component.WikiComponent.new(this[_WikipediaService_0_5]);
      this[_compView_0].create(this[_WikiComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfWikiComponent()).new(0, this, this.rootEl, this[_WikiComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__wiki__wikipedia_service.WikipediaService) && 0 === nodeIndex) {
        return this[_WikipediaService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__wiki__wiki_component$46template._ViewWikiComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_WikipediaService_0_5] = null;
    this[_WikiComponent_0_6] = null;
    src__wiki__wiki_component$46template._ViewWikiComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__wiki__wiki_component$46template._ViewWikiComponentHost0.prototype;
  dart.addTypeTests(src__wiki__wiki_component$46template._ViewWikiComponentHost0);
  dart.setMethodSignature(src__wiki__wiki_component$46template._ViewWikiComponentHost0, () => ({
    __proto__: dart.getMethods(src__wiki__wiki_component$46template._ViewWikiComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__wiki__wiki_component$46template._ViewWikiComponentHost0, () => ({
    __proto__: dart.getFields(src__wiki__wiki_component$46template._ViewWikiComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__wiki__wiki_component$46template.ViewWikiComponent0),
    [_WikipediaService_0_5]: dart.fieldType(src__wiki__wikipedia_service.WikipediaService),
    [_WikiComponent_0_6]: dart.fieldType(src__wiki__wiki_component.WikiComponent)
  }));
  src__wiki__wiki_component$46template.viewFactory_WikiComponentHost0 = function(parentView, parentIndex) {
    return new src__wiki__wiki_component$46template._ViewWikiComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__wiki__wiki_component$46template.viewFactory_WikiComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__wiki__wiki_component$46template, {
    /*src__wiki__wiki_component$46template.WikiComponentNgFactory*/get WikiComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfWikiComponent()).new('my-wiki', src__wiki__wiki_component$46template.viewFactory_WikiComponentHost0, src__wiki__wiki_component$46template._WikiComponentMetadata));
    },
    /*src__wiki__wiki_component$46template._WikiComponentMetadata*/get _WikiComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__wiki__wiki_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__wiki__wiki_component$46template.initReflector = function() {
    if (dart.test(src__wiki__wiki_component$46template._visited)) {
      return;
    }
    src__wiki__wiki_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__wiki__wiki_component.WikiComponent), src__wiki__wiki_component$46template.WikiComponentNgFactory);
    angular$46template.initReflector();
    src__wiki__wikipedia_service$46template.initReflector();
  };
  dart.fn(src__wiki__wiki_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/server_communication/src/wiki/wiki_component.template.ddc", {
    "package:server_communication/src/wiki/wiki_component.template.dart": src__wiki__wiki_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["wiki_component.template.dart"],"names":[],"mappings":"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","file":"wiki_component.template.ddc.js"}');
  // Exports:
  return {
    src__wiki__wiki_component$46template: src__wiki__wiki_component$46template
  };
});

//# sourceMappingURL=wiki_component.template.ddc.js.map
