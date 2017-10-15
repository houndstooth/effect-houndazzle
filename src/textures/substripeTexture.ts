import { SUBSTRIPE_COUNT } from '../houndazzleConstants'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { substripe } from '../components'
import { TileColorIndices, Coordinate, Units, Context } from '../../../../src'

const substripeTexture: {
	({}: {
		context: Context,
		tileColorIndices: TileColorIndices,
		tileOrigin: Coordinate,
		tileSize: Units,
		shapeColorIndex: number,
	}): void,
} = ({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex }) => {
	const substripeCount = SUBSTRIPE_COUNT * 2
	const colorsCount = tileColorIndices.length

	iterator(substripeCount).forEach(substripeIndex => {
		substripe({
			context,
			tileOrigin,
			tileSize,
			shapeColorIndex,
			substripeIndex,
			substripeCount,
			colorsCount,
		})
	})
}

export default substripeTexture
