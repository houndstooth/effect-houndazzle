import { Outline, Coordinate, Units } from '../../../../src'

type SubstripeOutline = {
	({}: {
		tileOrigin: Coordinate,
		tileSize: Units,
		substripeIndex: number,
		substripeCount: number,
	}): Outline,
}

const substripeOutline: SubstripeOutline = ({ tileOrigin, tileSize, substripeIndex, substripeCount }) => {
	const substripeWidth = tileSize * 2 / substripeCount
	const substripeSlack = tileSize / 2

	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	return [
		[
			x - substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		] as Coordinate,
		[
			x + tileSize + substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		] as Coordinate,
		[
			x + tileSize + substripeSlack,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth,
		] as Coordinate,
		[
			x - substripeSlack,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth,
		] as Coordinate,
	]
}

export default substripeOutline
