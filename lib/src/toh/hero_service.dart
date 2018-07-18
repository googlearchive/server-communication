import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart';

import 'hero.dart';

class HeroService {
  static final _headers = {'Content-Type': 'application/json'};
  static const _heroesUrl = 'api/heroes'; // URL to web API
  final Client _http;

  HeroService(this._http);

  Future<List<Hero>> getAll() async {
    try {
      final response = await _http.get(_heroesUrl);
      final heroes = (_extractData(response) as List)
          .map((value) => Hero.fromJson(value))
          .toList();
      return heroes;
    } catch (e) {
      throw _handleError(e);
    }
  }

  Future<Hero> create(String name) async {
    try {
      final response = await _http.post(_heroesUrl,
          headers: _headers, body: json.encode({'name': name}));
      return Hero.fromJson(_extractData(response));
    } catch (e) {
      throw _handleError(e);
    }
  }

  dynamic _extractData(Response resp) => json.decode(resp.body)['data'];

  Exception _handleError(dynamic e) {
    print(e); // for demo purposes only
    return Exception('Server error; cause: $e');
  }
}

/*
  static const _heroesUrl = 'heroes.json'; // URL to JSON file
*/
