import { Move } from "./entities/Move"
import { Pokemon } from "./entities/Pokemon"
import { PokemonType } from "./enums/PokemonType"


// サンプルポケモンの定義
const pikachu = new Pokemon(
  '001',
  'Pikachu',
  [PokemonType.Electric],
  {
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90,
  },
  [
    new Move('Thunder Shock', PokemonType.Electric, 40),
    new Move('Quick Attack', PokemonType.Normal, 40),
    new Move('Thunderbolt', PokemonType.Electric, 90),
    new Move('Iron Tail', PokemonType.Steel, 100),
  ],
);

// Pikachuのステータスを表示
console.log(pikachu.getStats());

// Pikachuの技を表示
console.log(pikachu.getMoves());
