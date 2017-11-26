import { from, getFromBaseOrDefaultPattern, Outline, to, Unit } from '../../../../src'
import { SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { SubstripeOutlineParams } from './types'

const BOTH_DIRECTIONS: number = 2
const TILE_WIDTH_CONSTANT: number = 1
const SLACK_FACTOR: number = (SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE - TILE_WIDTH_CONSTANT) / BOTH_DIRECTIONS

const substripeOutline: (_: SubstripeOutlineParams) => Outline =
	({ substripeCount, substripeIndex, tileSize }: SubstripeOutlineParams): Outline => {
		const gridSize: Unit = getGridSize({ tileSize })
		const substripeWidth: Unit = to.Unit(
			from.Unit(gridSize) * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE / substripeCount,
		)
		const substripeSlack: Unit = to.Unit(from.Unit(gridSize) * SLACK_FACTOR)

		return to.Outline([
			[
				-from.Unit(substripeSlack),
				substripeIndex * from.Unit(substripeWidth) - from.Unit(substripeSlack),
			],
			[
				from.Unit(gridSize) + from.Unit(substripeSlack),
				substripeIndex * from.Unit(substripeWidth) - from.Unit(substripeSlack),
			],
			[
				from.Unit(gridSize) + from.Unit(substripeSlack),
				(substripeIndex + TILE_WIDTH_CONSTANT) * from.Unit(substripeWidth) - from.Unit(substripeSlack),
			],
			[
				-from.Unit(substripeSlack),
				(substripeIndex + TILE_WIDTH_CONSTANT) * from.Unit(substripeWidth) - from.Unit(substripeSlack),
			],
		])
	}

const getGridSize: (_: { tileSize: Unit }) => Unit =
	({ tileSize }: { tileSize: Unit }): Unit =>
		to.Unit(from.Unit(tileSize) * getFromBaseOrDefaultPattern.main('tileResolution'))

export { substripeOutline as main }
