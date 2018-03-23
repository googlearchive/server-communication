// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'wiki_component.dart';
export 'wiki_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'wikipedia_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'wikipedia_service.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'wiki_component.dart' as import1;
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

const List<dynamic> styles$WikiComponent = const [];

class ViewWikiComponent0 extends AppView<import1.WikiComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.Element _el_3;
  import2.InputElement _el_5;
  import2.UListElement _el_6;
  ViewContainer _appEl_7;
  import4.NgFor _NgFor_7_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewWikiComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-wiki');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$WikiComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.WikiComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Wikipedia Demo');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    _el_3 = createAndAppend(doc, 'i', _el_2);
    import2.Text _text_4 = new import2.Text('Fetches after each keystroke');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'input', parentRenderNode);
    _el_6 = createAndAppend(doc, 'ul', parentRenderNode);
    var _anchor_7 = ngAnchor.clone(false);
    _el_6.append(_anchor_7);
    _appEl_7 = new ViewContainer(7, 6, this, _anchor_7);
    TemplateRef _TemplateRef_7_8 = new TemplateRef(_appEl_7, viewFactory_WikiComponent1);
    _NgFor_7_9 = new import4.NgFor(_appEl_7, _TemplateRef_7_8);
    _el_5.addEventListener('keyup', eventHandler1(_handle_keyup_5_0));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.WikiComponent _ctx = ctx;
    final currVal_0 = _ctx.items;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_7_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_7_9.ngDoCheck();
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

AppView<import1.WikiComponent> viewFactory_WikiComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewWikiComponent0(parentView, parentIndex);
}

class _ViewWikiComponent1 extends AppView<import1.WikiComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  var _expr_0;
  _ViewWikiComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewWikiComponent0._renderType;
  }
  @override
  ComponentRef<import1.WikiComponent> build() {
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

AppView<import1.WikiComponent> viewFactory_WikiComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewWikiComponent1(parentView, parentIndex);
}

const List<dynamic> styles$WikiComponentHost = const [];

class _ViewWikiComponentHost0 extends AppView<dynamic> {
  ViewWikiComponent0 _compView_0;
  import11.WikipediaService _WikipediaService_0_5;
  import1.WikiComponent _WikiComponent_0_6;
  _ViewWikiComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewWikiComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _WikipediaService_0_5 = new import11.WikipediaService();
    _WikiComponent_0_6 = new import1.WikiComponent(_WikipediaService_0_5);
    _compView_0.create(_WikiComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.WikiComponent>(0, this, rootEl, _WikiComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import11.WikipediaService) && (0 == nodeIndex))) {
      return _WikipediaService_0_5;
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

AppView viewFactory_WikiComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewWikiComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.WikiComponent> WikiComponentNgFactory = const ComponentFactory<import1.WikiComponent>('my-wiki', viewFactory_WikiComponentHost0, _WikiComponentMetadata);
const _WikiComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(WikiComponent, WikiComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
