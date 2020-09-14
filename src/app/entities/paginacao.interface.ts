import { PokemonList } from './pokemon-list.interface';

export class PaginacaoPokemon {
  count: number;
  next: string;
  previous: boolean;
  results: Array<PokemonList>;
}
