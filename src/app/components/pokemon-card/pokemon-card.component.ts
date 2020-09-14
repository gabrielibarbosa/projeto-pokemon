import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonList } from '../../entities/pokemon-list.interface';
import { Pokemon } from '../../entities/pokemon.interface';
import { PokemonGetByIdService } from '../../services/pokemon-get-by-id.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonList;
  pokeinfos: Pokemon;
  openDescription = false;

  constructor(
    public pokemonGetByIdService: PokemonGetByIdService
  ) { }

  ngOnInit(): void {

  }

  descriptionPokemon(nome: string) {
   this.pokemonGetByIdService.getPokemonById(nome)
    .subscribe((pokeinfos) => {
      console.log(pokeinfos);
      this.pokeinfos = pokeinfos;
      this.descriptionCard(this.openDescription);
    });
  }

  descriptionCard(action) {
    this.openDescription = !action;
  }

}
