import { Component, OnInit } from '@angular/core';
import { Pokemon } from './entities/pokemon.interface';
import { PokemonGetAllService } from './services/pokemon-get-all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pokemons: Array<Pokemon> = [];

  constructor(
    public pokemonGetAllService: PokemonGetAllService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonGetAllService.getAll().subscribe((pokemons) => {
      console.log(pokemons);
      this.pokemons = pokemons.results;
    });
  }
}
