import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonForm } from './entities/pakemon-form.interface';
import { PokemonList } from './entities/pokemon-list.interface';
import { PokemonGetAllService } from './services/pokemon-get-all.service';
import { PokemonGetByIdService } from './services/pokemon-get-by-id.service';
import { PokemonGetFormService } from './services/pokemon-get-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('ionInputPesquisa', { static: false }) ionInputPesquisa: Input;

  next: string;
  pokemons: Array<PokemonList> = [];
  pokeForms: Array<PokemonForm> = [];
  openDescription = false;

  constructor(
    public pokemonGetAllService: PokemonGetAllService,
    public pokemonGetByIdService: PokemonGetByIdService,
    public pokemonGetFormService: PokemonGetFormService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonGetAllService.getPokemons().subscribe((pokemons) => {
      pokemons.results.forEach((pokemon) => {
        this.formPokemon(pokemon.name);
      });
      this.next = pokemons.next;
    });
  }

  formPokemon(nome: string) {
    this.pokemonGetFormService.getForm(nome)
      .subscribe((pokeForms) => {
        this.pokeForms.push(pokeForms);
      });
  }

  morePokemons() {
    this.pokemonGetAllService.more(this.next).subscribe((pokemons) => {
      pokemons.results.forEach((pokemon) => {
        this.formPokemon(pokemon.name);
      });
      this.next = pokemons.next;
    });
  }
}
