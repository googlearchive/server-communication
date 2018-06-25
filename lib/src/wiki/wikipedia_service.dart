import 'dart:async';

import 'package:angular/angular.dart';
import 'package:jsonpadding/jsonpadding.dart';

@Injectable()
class WikipediaService {
  Future<List> search(String term) async {
    Uri uri = Uri(
        scheme: 'http',
        host: 'en.wikipedia.org',
        path: 'w/api.php',
        queryParameters: {
          'search': term,
          'action': 'opensearch',
          'format': 'json'
        });
    // TODO: Error handling
    List result = await jsonp(uri);
    return result[1];
  }
}
