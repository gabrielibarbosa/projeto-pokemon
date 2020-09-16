import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonGetByIdService } from './pokemon-get-by-id.service';

describe('PokemonGetByIdService', () => {
  let service: PokemonGetByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonGetByIdService
      ]
    });
    service = TestBed.inject(PokemonGetByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
