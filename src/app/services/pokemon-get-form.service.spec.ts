import { TestBed } from '@angular/core/testing';

import { PokemonGetFormService } from './pokemon-get-form.service';

describe('PokemonGetFormService', () => {
  let service: PokemonGetFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGetFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
