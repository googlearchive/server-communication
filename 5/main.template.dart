// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'main.dart';
export 'main.dart';
import 'package:angular/angular.dart';
import 'package:http/http.dart';
import 'package:server_communication/app_component.template.dart' as ng;
import 'package:server_communication/in_memory_data_service.dart';
import 'main.template.dart' as self;
import 'main.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:server_communication/app_component.template.dart' as _ref2;
import 'package:server_communication/in_memory_data_service.template.dart' as _ref3;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:server_communication/in_memory_data_service.dart' as _i3;
import 'package:http/src/client.dart' as _i4;

_i1.Injector injector$Injector([_i1.Injector parent]) => new _Injector$injector._(parent);

class _Injector$injector extends _i2.HierarchicalInjector {
  _Injector$injector._([_i1.Injector parent]) : super(parent);

  _i3.InMemoryDataService _field0;

  _i3.InMemoryDataService _getInMemoryDataService$0() => _field0 ??= new _i3.InMemoryDataService();
  _i1.Injector _getInjector$1() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i4.Client)) {
      return _getInMemoryDataService$0();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$1();
    }
    return orElse;
  }
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
