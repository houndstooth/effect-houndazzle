import { from, Outline, to } from '../../../../src'
import { SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { SubstripeOutlineParams } from './types'

const DIRECTIONS_PER_DIMENSION = 2
const TILE_WIDTH_CONSTANT = 1
const SLACK_FACTOR = (SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE - TILE_WIDTH_CONSTANT) / DIRECTIONS_PER_DIMENSION

const substripeOutline: (_: SubstripeOutlineParams) => Outline = ({ substripeCount, substripeIndex, tileOrigin, tileSize }) => {
	const substripeWidth = from.Unit(tileSize) * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE / substripeCount
	const substripeSlack = from.Unit(tileSize) * SLACK_FACTOR

	const x = from.Unit(tileOrigin[ 0 ])
	const y = from.Unit(tileOrigin[ 1 ])

	return to.Outline([
		[
			x - substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + from.Unit(tileSize) + substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + from.Unit(tileSize) + substripeSlack,
			y - substripeSlack + (substripeIndex + TILE_WIDTH_CONSTANT) * substripeWidth,
		],
		[
			x - substripeSlack,
			y - substripeSlack + (substripeIndex + TILE_WIDTH_CONSTANT) * substripeWidth,
		],
	])
}

export { substripeOutline }
