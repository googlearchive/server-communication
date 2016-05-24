import 'dart:async';
import 'dart:convert';
import 'hero.dart';
import 'package:angular2/core.dart';
import 'package:http/browser_client.dart';
import 'package:http/http.dart';

@Injectable()
class HeroService {
  static const _heroesUrl = 'app/heroes'; // URL to web API
  final BrowserClient _http;

  HeroService(this._http);

  Future<List<Hero>> getHeroes() async {
    try {
      final response = await _http.get(_heroesUrl);
      final heroes = _extractData(response)
          .map((value) => new Hero.fromJson(value))
          .toList();
      return heroes;
    } catch (e) {
      throw _handleError(e);
    }
  }

  Future<Hero> addHero(String name) async {
    try {
      final response = await _http.post(_heroesUrl,
          headers: {'Content-Type': 'application/json'},
          body: JSON.encode({'name': name}));
      return new Hero.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }

  dynamic _extractData(Response res) {
    var body = JSON.decode(res.body);
    // TODO: https://github.com/adaojunior/http-in-memory-web-api/issues/1
    // Once #1 is fixed, drop the `?? body` term:
    return body['data'] ?? body;
  }

  Exception _handleError(dynamic e) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    print(e); // log to console instead
    return new Exception('Server error; cause: $e');
  }
}

/*
  static const _heroesUrl = 'heroes.json'; // URL to JSON file
*/
