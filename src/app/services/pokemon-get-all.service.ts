import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pokemon } from '../entities/pokemon.interface';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable()
export class PokemonGetAllService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(API_URL)
      .pipe(
        tap(pokemon => {
          return pokemon;
        })
      );
  }
}
