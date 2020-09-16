import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonGetByIdService } from '../../services/pokemon-get-by-id.service';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonCardComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonGetByIdService
      ]
    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Deve chamar descriptionPokemon', () => {
    const nome = 'bulbasaur';

    const descriptionPokemon = spyOn(component, 'descriptionPokemon');
    component.descriptionPokemon(nome);
    expect(descriptionPokemon).toHaveBeenCalled();
  });
});
