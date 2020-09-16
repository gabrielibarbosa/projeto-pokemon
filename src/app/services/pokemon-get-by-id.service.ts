import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../entities/pokemon.interface';

@Injectable()
export class PokemonGetByIdService {

  get url() {
    return `https://pokeapi.co/api/v2/pokemon`;
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemonById(nome: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.url + '/' + nome)
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
    return throwError(errorMessage);
  }

}
