import { Context, Coordinate, TileColorIndices, Units } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { substripe } from '../components'
import { SUBSTRIPE_COUNT } from '../houndazzleConstants'

const substripeTexture: {
	({}: {
		context: Context,
		shapeColorIndex: number,
		tileColorIndices: TileColorIndices,
		tileOrigin: Coordinate,
		tileSize: Units,
	}): void,
} = ({ context, shapeColorIndex, tileColorIndices, tileOrigin, tileSize }) => {
	const substripeCount = SUBSTRIPE_COUNT * 2
	const colorsCount = tileColorIndices.length

	iterator(substripeCount).forEach(substripeIndex => {
		substripe({
			colorsCount,
			context,
			shapeColorIndex,
			substripeCount,
			substripeIndex,
			tileOrigin,
			tileSize,
		})
	})
}

export default substripeTexture
