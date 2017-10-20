import { Coordinate, from, Outline, to, Units } from '../../../../src'
import { SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'

const DIRECTIONS_PER_DIMENSION = 2
const TILE_WIDTH_CONSTANT = 1
const SLACK_FACTOR = (SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE - TILE_WIDTH_CONSTANT) / DIRECTIONS_PER_DIMENSION

const substripeOutline: (_: {
	substripeCount: number,
	substripeIndex: number,
	tileOrigin: Coordinate,
	tileSize: Units,
}) => Outline = ({ substripeCount, substripeIndex, tileOrigin, tileSize }) => {
	const substripeWidth = from.Units(tileSize) * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE / substripeCount
	const substripeSlack = from.Units(tileSize) * SLACK_FACTOR

	const x = from.Units(tileOrigin[ 0 ])
	const y = from.Units(tileOrigin[ 1 ])

	return to.Outline([
		[
			x - substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + from.Units(tileSize) + substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + from.Units(tileSize) + substripeSlack,
			y - substripeSlack + (substripeIndex + TILE_WIDTH_CONSTANT) * substripeWidth,
		],
		[
			x - substripeSlack,
			y - substripeSlack + (substripeIndex + TILE_WIDTH_CONSTANT) * substripeWidth,
		],
	])
}

export { substripeOutline }
