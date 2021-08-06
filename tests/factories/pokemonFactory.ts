import faker from "faker";

import random from "../utils/random";

export class GenPokemon {
  public name: string;
  public number: number;
  public image: string;
  public weight: number;
  public height: number;
  public baseExp: number;
  public description: string;
  public inMyPokemons: boolean;

  constructor() {
    this.name = faker.name.firstName();
    this.number = random(898);
    this.image = faker.internet.url();
    this.weight = random(10000);
    this.height = random(100);
    this.baseExp = (1000);
    this.description = faker.lorem.words(10);
    this.inMyPokemons = random(2) ? true : false;
  }
}