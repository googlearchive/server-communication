import 'dart:async';
import 'dart:convert';

import 'package:angular/angular.dart';
import 'package:http/http.dart';

import 'hero.dart';

@Injectable()
class HeroService {
  static final _headers = {'Content-Type': 'application/json'};
  static const _heroesUrl = 'api/heroes'; // URL to web API
  final Client _http;

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

  Future<Hero> create(String name) async {
    try {
      final response = await _http.post(_heroesUrl,
          headers: _headers, body: JSON.encode({'name': name}));
      return new Hero.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }

  dynamic _extractData(Response resp) => JSON.decode(resp.body)['data'];

  Exception _handleError(dynamic e) {
    print(e); // for demo purposes only
    return new Exception('Server error; cause: $e');
  }
}

/*
  static const _heroesUrl = 'heroes.json'; // URL to JSON file
*/
