import { Component, Input, OnInit } from '@angular/core';
import { PokemonForm } from '../../entities/pakemon-form.interface';
import { Pokemon } from '../../entities/pokemon.interface';
import { PokemonGetByIdService } from '../../services/pokemon-get-by-id.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonForm;

  pokeinfos: Pokemon;
  openDescription = false;

  constructor(
    public pokemonGetByIdService: PokemonGetByIdService,
  ) { }

  ngOnInit(): void {
  }

  descriptionPokemon(nome: string) {
    this.pokemonGetByIdService.getPokemonById(nome)
      .subscribe((pokeinfos) => {
        this.pokeinfos = pokeinfos;
        this.openCard(this.openDescription);
      });
  }

  openCard(action) {
    this.openDescription = !action;
  }
}
