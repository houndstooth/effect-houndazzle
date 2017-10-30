import { from, Outline, to, Unit } from '../../../../src'
import { SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { SubstripeOutlineParams } from './types'

const BOTH_DIRECTIONS: number = 2
const TILE_WIDTH_CONSTANT: number = 1
const SLACK_FACTOR: number = (SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE - TILE_WIDTH_CONSTANT) / BOTH_DIRECTIONS

const substripeOutline: (_: SubstripeOutlineParams) => Outline =
	({ substripeCount, substripeIndex, tileOrigin, tileSize }: SubstripeOutlineParams): Outline => {
		const substripeWidth: Unit = to.Unit(
			from.Unit(tileSize) * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE / substripeCount,
		)
		const substripeSlack: Unit = to.Unit(from.Unit(tileSize) * SLACK_FACTOR)

		const x: number = from.Unit(tileOrigin[ 0 ])
		const y: number = from.Unit(tileOrigin[ 1 ])

		return to.Outline([
			[
				x - from.Unit(substripeSlack),
				y - from.Unit(substripeSlack) + substripeIndex * from.Unit(substripeWidth),
			],
			[
				x + from.Unit(tileSize) + from.Unit(substripeSlack),
				y - from.Unit(substripeSlack) + substripeIndex * from.Unit(substripeWidth),
			],
			[
				x + from.Unit(tileSize) + from.Unit(substripeSlack),
				y - from.Unit(substripeSlack) + (substripeIndex + TILE_WIDTH_CONSTANT) * from.Unit(substripeWidth),
			],
			[
				x - from.Unit(substripeSlack),
				y - from.Unit(substripeSlack) + (substripeIndex + TILE_WIDTH_CONSTANT) * from.Unit(substripeWidth),
			],
		])
	}

export { substripeOutline }
