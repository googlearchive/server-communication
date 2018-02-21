// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'wiki_smart_component.dart';
export 'wiki_smart_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:stream_transform/stream_transform.dart';
import 'wikipedia_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'wikipedia_service.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'wiki_smart_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'wikipedia_service.dart' as import11;

const List<dynamic> styles$WikiSmartComponent = const [];

class ViewWikiSmartComponent0 extends AppView<import1.WikiSmartComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.Element _el_3;
  import2.InputElement _el_5;
  import2.UListElement _el_6;
  ViewContainer _appEl_7;
  import4.NgFor _NgFor_7_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewWikiSmartComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-wiki-smart');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$WikiSmartComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.WikiSmartComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Smarter Wikipedia Demo');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    _el_3 = createAndAppend(doc, 'i', _el_2);
    import2.Text _text_4 = new import2.Text('Fetches when typing stops');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'input', parentRenderNode);
    _el_6 = createAndAppend(doc, 'ul', parentRenderNode);
    var _anchor_7 = ngAnchor.clone(false);
    _el_6.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_6 = new TemplateRef(_appEl_7, viewFactory_WikiSmartComponent1);
    _NgFor_7_7 = new import4.NgFor(_appEl_7, _TemplateRef_7_6);
    _el_5.addEventListener('keyup', eventHandler1(_handle_keyup_5_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.WikiSmartComponent _ctx = ctx;
    final currVal_0 = _ctx.items;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_7_7.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_7_7.ngDoCheck();
    _appEl_7.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_7?.destroyNestedViews();
  }

  void _handle_keyup_5_0($event) {
    final local_term = _el_5;
    ctx.search(local_term.value);
  }
}

AppView<import1.WikiSmartComponent> viewFactory_WikiSmartComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewWikiSmartComponent0(parentView, parentIndex);
}

class _ViewWikiSmartComponent1 extends AppView<import1.WikiSmartComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewWikiSmartComponent1(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewWikiSmartComponent0._renderType;
  }
  @override
  ComponentRef<import1.WikiSmartComponent> build() {
    var doc = import2.document;
    _el_0 = doc.createElement('li');
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final dynamic local_item = locals['\$implicit'];
    final currVal_0 = import8.interpolate0(local_item);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.WikiSmartComponent> viewFactory_WikiSmartComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewWikiSmartComponent1(parentView, parentIndex);
}

const List<dynamic> styles$WikiSmartComponentHost = const [];

class _ViewWikiSmartComponentHost0 extends AppView<dynamic> {
  ViewWikiSmartComponent0 _compView_0;
  import11.WikipediaService _WikipediaService_0_4;
  import1.WikiSmartComponent _WikiSmartComponent_0_5;
  _ViewWikiSmartComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewWikiSmartComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WikipediaService_0_4 = new import11.WikipediaService();
    _WikiSmartComponent_0_5 = new import1.WikiSmartComponent(_WikipediaService_0_4);
    _compView_0.create(_WikiSmartComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.WikiSmartComponent>(0, this, rootEl, _WikiSmartComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import11.WikipediaService) && (0 == nodeIndex))) {
      return _WikipediaService_0_4;
    }
    if ((identical(token, import1.WikiSmartComponent) && (0 == nodeIndex))) {
      return _WikiSmartComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_WikiSmartComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewWikiSmartComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.WikiSmartComponent> WikiSmartComponentNgFactory = const ComponentFactory<import1.WikiSmartComponent>('my-wiki-smart', viewFactory_WikiSmartComponentHost0, _WikiSmartComponentMetadata);
const _WikiSmartComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(WikiSmartComponent, WikiSmartComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
