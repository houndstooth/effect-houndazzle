import shape from '../../../../src/components/shape'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import substripeModulus from '../utilities/substripeModulus'
import getSubstripeCount from '../utilities/getSubstripeCount'
import store from '../../../../store'

export default ({ gridAddress, tileColors, tileSize, tileOrigin, stripeIndex, colorsIndex, stripeCount, options, outlineOptions, getOutline }) => {
	let { substripeCount, substripeCountContinuumMode } = store.mainHoundstooth.basePattern.colorSettings.substripeTextureSettings
	substripeCount = substripeCountContinuumMode ? getSubstripeCount({ gridAddress, stripeIndex, stripeCount }) : substripeCount
	outlineOptions = outlineOptions || {}
	outlineOptions.substripeCount = substripeCount
	outlineOptions.orientation = codeUtilities.wrappedIndex({
		array: options.substripeTexture.tileOrientations,
		index: stripeIndex,
	})

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		outlineOptions.substripeIndex = substripeIndex
		shape({
			gridAddress,
			tileColors: substripeModulus({
				substripeIndex,
				nonDazzle: tileColors,
				dazzle: options.substripeTexture.tileColors,
			}),
			colorsIndex,
			getOutline,
			outlineOptions,
			tileOrigin,
			tileSize,
		})
	})
}
