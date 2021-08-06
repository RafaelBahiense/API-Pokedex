import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import PokemonUser from "./Pokemon_Users"
import Sessions from "./Sessions";

@Entity("users")
@Unique(["email"])
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  hash!: string;

  @OneToMany(() => PokemonUser, (pokemon_user) => pokemon_user.userId)
  pokemon_user!: PokemonUser[];

  @OneToMany(() => Sessions, (sessions) => sessions.userId)
  sessions!: Sessions[];
}
