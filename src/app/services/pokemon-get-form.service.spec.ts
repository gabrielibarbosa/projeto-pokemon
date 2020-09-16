import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokemonGetFormService } from './pokemon-get-form.service';

describe('PokemonGetFormService', () => {
  let service: PokemonGetFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonGetFormService
      ]
    });
    service = TestBed.inject(PokemonGetFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
