import render from '../../../../src/render/render'
import houndazzleConstants from '../houndazzleConstants'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import substripeOutline from '../outlines/substripeOutline'
import colorUtilities from '../../../../src/utilities/colorUtilities'

export default ({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex }) => {
	const substripeCount = houndazzleConstants.SUBSTRIPE_COUNT * 2
	const colorsCount = tileColorIndices.length

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		const substripeColor = colorUtilities.getColor({ index: substripeIndex })
		if (substripeColor.a === 0) return

		const outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount, colorsCount, shapeColorIndex })
		render({ context, shapeColor: substripeColor, outline })
	})
}
