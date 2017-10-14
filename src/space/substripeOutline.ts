import { Outline } from '../../../../src'
import Coordinate from '../../../../src/space/types/Coordinate'

type SubstripeOutline = {
	({}: {
		tileOrigin: Coordinate,
		tileSize: number,
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
		],
		[
			x + tileSize + substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + tileSize + substripeSlack,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth,
		],
		[
			x - substripeSlack,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth,
		],
	]
}

export default substripeOutline
