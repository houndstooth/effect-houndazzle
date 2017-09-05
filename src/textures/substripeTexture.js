import houndazzleConstants from '../houndazzleConstants'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import substripeOutline from '../outlines/substripeOutline'
import solid from '../../../../src/components/solid'

export default ({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex }) => {
	const substripeCount = houndazzleConstants.SUBSTRIPE_COUNT * 2
	const colorsCount = tileColorIndices.length

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		const outline = substripeOutline({
			tileOrigin,
			tileSize,
			substripeIndex,
			substripeCount,
			colorsCount,
			shapeColorIndex,
		})
		solid({ context, outline, shapeColorIndex: substripeIndex, tileOrigin, tileSize })
	})
}
