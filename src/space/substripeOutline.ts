import { Coordinate, Outline, Units } from '../../../../src'

const substripeOutline: {
	({}: {
		substripeCount: number,
		substripeIndex: number,
		tileOrigin: Coordinate,
		tileSize: Units,
	}): Outline,
} = ({ substripeCount, substripeIndex, tileOrigin, tileSize }) => {
	const tileSizeDowncast = tileSize as any
	const substripeWidth = tileSizeDowncast * 2 / substripeCount as any
	const substripeSlack = tileSizeDowncast / 2 as any

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
			y - substripeSlack + (substripeIndex + 1) * substripeWidth as any,
		] as Coordinate,
		[
			x - substripeSlack as any,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth as any,
		] as Coordinate,
	]
}

export default substripeOutline
