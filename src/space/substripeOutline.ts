import { Coordinate, Outline, Units } from '../../../../src'
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
	const tileSizeDowncast = tileSize as any
	const substripeWidth = tileSizeDowncast * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE / substripeCount as any
	const substripeSlack = tileSizeDowncast * SLACK_FACTOR as any

	const x = tileOrigin[ 0 ] as any
	const y = tileOrigin[ 1 ] as any

	return [
		[
			x - substripeSlack as any,
			y - substripeSlack + substripeIndex * substripeWidth as any,
		] as Coordinate,
		[
			x + tileSizeDowncast + substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth as any,
		] as Coordinate,
		[
			x + tileSizeDowncast + substripeSlack,
			y - substripeSlack + (substripeIndex + TILE_WIDTH_CONSTANT) * substripeWidth as any,
		] as Coordinate,
		[
			x - substripeSlack as any,
			y - substripeSlack + (substripeIndex + TILE_WIDTH_CONSTANT) * substripeWidth as any,
		] as Coordinate,
	]
}

export { substripeOutline }
