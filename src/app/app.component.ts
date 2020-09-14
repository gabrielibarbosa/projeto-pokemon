import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonList } from './entities/pokemon-list.interface';
import { PokemonGetAllService } from './services/pokemon-get-all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  next: string;
  pokemons: Array<PokemonList> = [];
  @ViewChild('ionInputPesquisa', { static: false }) ionInputPesquisa: Input;

  constructor(
    public pokemonGetAllService: PokemonGetAllService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonGetAllService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons.results;
      this.next = pokemons.next;
    });
  }

  carregarMais() {
    this.pokemonGetAllService.more(this.next).subscribe((pokemons) => {
      pokemons.results.forEach((pokemon) => {
        this.pokemons.push(pokemon);
      });
      this.next = pokemons.next;
    });
  }
}
