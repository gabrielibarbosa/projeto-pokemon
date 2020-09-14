import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Pokemon } from '../entities/pokemon.interface';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable()
export class PokemonGetByIdService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemonById(nome: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(API_URL + '/' + nome)
      .pipe(
        map((pokeinfos) => {
         const pokedados: Pokemon = {
          id: pokeinfos.id,
          name: pokeinfos.name,
          height: pokeinfos.height,
          order: pokeinfos.order,
          weight: pokeinfos.weight,
          abilities: pokeinfos.abilities,
         };
         return pokedados;
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
