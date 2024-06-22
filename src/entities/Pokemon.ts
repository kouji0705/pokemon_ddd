import { PokemonType } from "@/enums/PokemonType";
import type { Move } from "@entities/Move";
import { Stats } from "@entities/Stats";

export class Pokemon {
	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly type: PokemonType[],
		private readonly stats: Stats,
		private readonly moves: Move[],
	) {
		if (moves.length > 4) {
			throw new Error("ポケモンは4つまでしか技を持てません。");
		}
	}

	// ステータスを取得するメソッド
	getStats(): Stats {
		return this.stats;
	}

	// 技を取得するメソッド
	getMoves(): Move[] {
		return this.moves;
	}
}
