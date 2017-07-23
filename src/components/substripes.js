import shape from '../../../../src/components/shape'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import substripeModulus from '../utilities/substripeModulus'
import getSubstripeCount from '../utilities/getSubstripeCount'
import store from '../../../../store'

export default ({ gridAddress, tileColors, tileSize, tileOrigin, stripeIndex, colorsIndex, stripeCount, options, coordinatesOptions, getCoordinates }) => {
	let { substripeCount, dazzleContinuum } = store.currentState.mainHoundstooth.basePattern.colorSettings.houndazzle
	substripeCount = dazzleContinuum ? getSubstripeCount({ gridAddress, stripeIndex, stripeCount }) : substripeCount
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeCount = substripeCount
	coordinatesOptions.orientation = codeUtilities.wrappedIndex({
		array: options.tileDazzle.tileOrientations,
		index: stripeIndex,
	})

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			gridAddress,
			tileColors: substripeModulus({
				substripeIndex,
				nonDazzle: tileColors,
				dazzle: options.tileDazzle.tileColors,
			}),
			colorsIndex,
			getCoordinates,
			coordinatesOptions,
			tileOrigin,
			tileSize,
		})
	})
}
