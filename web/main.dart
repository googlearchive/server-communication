import 'package:angular2/angular2.dart';
import 'package:angular2/platform/browser.dart';

import 'package:server_communication/app_component.dart';
import 'package:server_communication/in_memory_data_service.dart';
import 'package:http/http.dart';

void main() {
  bootstrap(AppComponent, [
    // in-memory web api provider
    provide(Client, useClass: InMemoryDataService)
  ]);
}
/*

void main() {
  bootstrap(AppComponent, [
    provide(BrowserClient, useFactory: () => new BrowserClient(), deps: [])
  ]);
}
*/
