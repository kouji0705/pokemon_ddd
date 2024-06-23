import { Pokemon } from "@entities/Pokemon";
import { PokemonType } from "@enums/PokemonType";
import { Stats } from "@entities/Stats";
import { Move } from "@entities/Move";
import { Battle } from "@services/Battle"; // サービスのインポートパスを修正

const pikachuStats: Stats = { hp: 100, attack: 55, defense: 40, speed: 90 };
const bulbasaurStats: Stats = { hp: 100, attack: 49, defense: 49, speed: 45 };

const thunderbolt: Move = {
	name: "Thunderbolt",
	type: PokemonType.Electric,
	power: 90,
};
const tackle: Move = { name: "Tackle", type: PokemonType.Normal, power: 40 };

const pikachu = new Pokemon(
	25,
	"Pikachu",
	[PokemonType.Electric],
	pikachuStats,
	[thunderbolt],
);
const bulbasaur = new Pokemon(
	1,
	"Bulbasaur",
	[PokemonType.Grass, PokemonType.Poison],
	bulbasaurStats,
	[tackle],
);

const battle = new Battle(pikachu, bulbasaur);

// バトルを実行
battle.battleTurn();
battle.battleTurn();
