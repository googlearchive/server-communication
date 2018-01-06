import 'package:angular/angular.dart';
/*
import 'package:http/browser_client.dart';
*/
import 'package:http/http.dart';
import 'package:server_communication/app_component.dart';
import 'package:server_communication/in_memory_data_service.dart';

void main() {
  bootstrap(AppComponent, [
    // in-memory web api provider
    provide(Client, useClass: InMemoryDataService)
  ]);
}
/*

void main() {
  bootstrap(AppComponent, [
    provide(Client, useFactory: () => new BrowserClient(), deps: [])
  ]);
}
*/
