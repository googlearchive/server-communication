import 'package:angular2/core.dart';
import 'package:angular2/platform/browser.dart';
import 'package:http/browser_client.dart';

import 'package:server_communication/app_component.dart';
import "package:server_communication/hero_data.dart";

void main() {
  bootstrap(AppComponent, const [
    // in-memory web api provider
    const Provider(BrowserClient,
        useFactory: HttpClientBackendServiceFactory, deps: const [])
  ]);
}
/*

void main() {
  bootstrap(AppComponent, [
    provide(BrowserClient, useFactory: () => new BrowserClient(), deps: [])
  ]);
}
*/
