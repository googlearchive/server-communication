import 'package:angular2/core.dart';
import 'package:http/browser_client.dart';

import 'hero_list_component.dart';
import 'hero_service.dart';
/* ... */
import 'package:server_communication/hero_data.dart';

@Component(
    selector: 'my-toh',
    template: '''
      <h1>Tour of Heroes</h1>
      <hero-list></hero-list>
    ''',
    directives: const [
      HeroListComponent
    ],
    /* ... */
    providers: const [
      HeroService,
      // in-memory web api providers
      const Provider(BrowserClient, useFactory: HttpClientBackendServiceFactory)
    ])
class TohComponent {}
