import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonForm } from '../entities/pakemon-form.interface';

const API_URL = 'https://pokeapi.co/api/v2/pokemon-form';

@Injectable()
export class PokemonGetFormService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getForm(nome: string): Observable<PokemonForm> {
    return this.httpClient.get<PokemonForm>(API_URL + '/' + nome)
      .pipe(
        map((pokeinfos) => {

          const pokedados: PokemonForm = {
            id: pokeinfos.id,
            name: pokeinfos.name,
            sprites: pokeinfos.sprites,
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
