import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginacaoPokemon } from '../entities/paginacao.interface';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable()
export class PokemonGetAllService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemons(): Observable<PaginacaoPokemon> {
    return this.httpClient.get<PaginacaoPokemon>(API_URL)
      .pipe(
        map(pokemon => {
          return pokemon;
        })
      );
  }

  more(next: string): Observable<PaginacaoPokemon> {

    return this.httpClient.get<PaginacaoPokemon>(next)
      .pipe(
        map(pokemon => {
          return pokemon;
        })
      );
  }
}
