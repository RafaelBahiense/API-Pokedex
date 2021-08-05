import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import PokemonUser from "./Pokemon_Users"

@Entity("pokemons")
export default class Pokemon {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  number!: number;

  @Column()
  image!: string;

  @Column()
  weight!: number;

  @Column()
  height!: number;

  @Column()
  baseExp!: number;

  @Column()
  description!: string;

  @OneToMany(() => PokemonUser, (pokemon_user) => pokemon_user.userId)
  pokemon_user!: PokemonUser[];
}
