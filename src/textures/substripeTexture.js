import houndazzleConstants from '../houndazzleConstants'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import components from '../components'

export default ({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex }) => {
	const substripeCount = houndazzleConstants.SUBSTRIPE_COUNT * 2
	const colorsCount = tileColorIndices.length

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		components.substripe({
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
