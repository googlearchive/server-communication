// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_list_component.dart';
export 'hero_list_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'hero_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_service.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;

import 'package:angular/src/core/linker/app_view.dart';
import 'hero_list_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'hero.dart' as import12;
import 'hero_service.dart' as import13;
import 'package:http/src/client.dart' as import14;

const List<dynamic> styles$HeroListComponent = const ['.error._ngcontent-%COMP% { color:red; }'];

class ViewHeroListComponent0 extends AppView<import1.HeroListComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.UListElement _el_4;
  ViewContainer _appEl_5;
  import4.NgFor _NgFor_5_7;
  import2.Element _el_6;
  import2.InputElement _el_8;
  import2.ButtonElement _el_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHeroListComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-list');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import2.Text _text_1 = new import2.Text('Tour of Heroes');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_2);
    import2.Text _text_3 = new import2.Text('Heroes:');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'ul', parentRenderNode);
    addShimC(_el_4);
    var _anchor_5 = ngAnchor.clone(false);
    _el_4.append(_anchor_5);
    _appEl_5 = new ViewContainer(5, 4, this, _anchor_5);
    TemplateRef _TemplateRef_5_6 = new TemplateRef(_appEl_5, viewFactory_HeroListComponent1);
    _NgFor_5_7 = new import4.NgFor(_appEl_5, _TemplateRef_5_6);
    _el_6 = createAndAppend(doc, 'label', parentRenderNode);
    addShimE(_el_6);
    import2.Text _text_7 = new import2.Text('New hero name:');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'input', _el_6);
    addShimC(_el_8);
    _el_9 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_9);
    import2.Text _text_10 = new import2.Text('Add Hero');
    _el_9.append(_text_10);
    var _anchor_11 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_11);
    _appEl_11 = new ViewContainer(11, null, this, _anchor_11);
    TemplateRef _TemplateRef_11_6 = new TemplateRef(_appEl_11, viewFactory_HeroListComponent2);
    _NgIf_11_7 = new NgIf(_appEl_11, _TemplateRef_11_6);
    _el_9.addEventListener('click', eventHandler1(_handle_click_9_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroListComponent _ctx = ctx;
    final currVal_0 = _ctx.heroes;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_5_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_5_7.ngDoCheck();
    _NgIf_11_7.ngIf = (_ctx.errorMessage != null);
    _appEl_5.detectChangesInNestedViews();
    _appEl_11.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_5?.destroyNestedViews();
    _appEl_11?.destroyNestedViews();
  }

  void _handle_click_9_0($event) {
    final local_newHeroName = _el_8;
    ctx.addHero(local_newHeroName.value);
    local_newHeroName.value = '';
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroListComponent0(parentView, parentIndex);
}

class _ViewHeroListComponent1 extends AppView<import1.HeroListComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewHeroListComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroListComponent0._renderType;
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import12.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import9.interpolate0(local_hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroListComponent1(parentView, parentIndex);
}

class _ViewHeroListComponent2 extends AppView<import1.HeroListComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewHeroListComponent2(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroListComponent0._renderType;
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('p');
    _el_0.className = 'error';
    addShimE(_el_0);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroListComponent _ctx = ctx;
    final currVal_0 = (_ctx.errorMessage ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroListComponent2(parentView, parentIndex);
}

const List<dynamic> styles$HeroListComponentHost = const [];

class _ViewHeroListComponentHost0 extends AppView<dynamic> {
  ViewHeroListComponent0 _compView_0;
  import13.HeroService _HeroService_0_4;
  import1.HeroListComponent _HeroListComponent_0_5;
  _ViewHeroListComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroService_0_4 = new import13.HeroService(this.injectorGet(import14.Client, viewData.parentIndex));
    _HeroListComponent_0_5 = new import1.HeroListComponent(_HeroService_0_4);
    _compView_0.create(_HeroListComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroListComponent>(0, this, rootEl, _HeroListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import13.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_4;
    }
    if ((identical(token, import1.HeroListComponent) && (0 == nodeIndex))) {
      return _HeroListComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _HeroListComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroListComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroListComponent> HeroListComponentNgFactory = const ComponentFactory<import1.HeroListComponent>('hero-list', viewFactory_HeroListComponentHost0, _HeroListComponentMetadata);
const _HeroListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerComponent(
    HeroListComponent,
    HeroListComponentNgFactory,
  );
}
