import shape from '../../../../src/components/shape'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import substripeModulus from '../utilities/substripeModulus'
import getSubstripeCount from '../utilities/getSubstripeCount'
import store from '../../../../store'

export default ({ gridAddress, tileColors, tileSize, tileOrigin, stripeIndex, colorsIndex, stripeCount, options, outlineOptions, getOutline }) => {
	let { substripeCount, dazzleContinuum } = store.mainHoundstooth.basePattern.colorSettings.houndazzle
	substripeCount = dazzleContinuum ? getSubstripeCount({ gridAddress, stripeIndex, stripeCount }) : substripeCount
	outlineOptions = outlineOptions || {}
	outlineOptions.substripeCount = substripeCount
	outlineOptions.orientation = codeUtilities.wrappedIndex({
		array: options.tileDazzle.tileOrientations,
		index: stripeIndex,
	})

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		outlineOptions.substripeIndex = substripeIndex
		shape({
			gridAddress,
			tileColors: substripeModulus({
				substripeIndex,
				nonDazzle: tileColors,
				dazzle: options.tileDazzle.tileColors,
			}),
			colorsIndex,
			getOutline,
			outlineOptions,
			tileOrigin,
			tileSize,
		})
	})
}
