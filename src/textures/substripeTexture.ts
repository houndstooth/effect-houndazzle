import { SUBSTRIPE_COUNT } from '../houndazzleConstants'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { substripe } from '../components'

export default ({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex }) => {
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
