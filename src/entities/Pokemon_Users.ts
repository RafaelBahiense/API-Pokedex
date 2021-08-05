import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne } from "typeorm";
import Pokemon from "./Pokemon";
import User from "./User";

@Entity("pokemon_user")
@Unique(["pokemonId", "userId"])
export default class PokemonUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  pokemonId!: number;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.id)
  pokemon!: Pokemon;

  @Column()
  userId!: number;

  @ManyToOne(() => User, (user) => user.id)
  user!: User;

  @Column()
  inMyPokemons!: boolean;
}
