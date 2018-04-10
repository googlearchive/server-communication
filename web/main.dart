import 'package:angular/angular.dart';
/*
import 'package:http/browser_client.dart';
*/
import 'package:http/http.dart';
import 'package:server_communication/app_component.dart';

import 'main.template.dart' as ng;
import 'package:server_communication/in_memory_data_service.dart';

void main() {
  bootstrapStatic(
      AppComponent,
      [
        // in-memory web api provider
        const ClassProvider(Client, useClass: InMemoryDataService),
      ],
      ng.initReflector);
}
/*

void main() {
  bootstrapStatic(AppComponent, [
    const FactoryProvider(Client, () => new BrowserClient()),
  ],
  ng.initReflector);
}
*/
