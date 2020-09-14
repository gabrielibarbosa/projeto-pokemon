import { Abilities } from './abilities.interface';

export class Pokemon {
  id: number;
  name: string;
  height: number;
  order: number;
  weight: number;
  abilities: Abilities[];
}
