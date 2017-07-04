import shape from '../../../../src/components/shape'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import substripeModulus from '../utilities/substripeModulus'
import getSubstripeCount from '../utilities/getSubstripeCount'

export default ({ address, tileColors, tileOrigin, sizedUnit, stripeIndex, colorsIndex, stripeCount, options, coordinatesOptions, getCoordinates }) => {
	let { substripeCount, dazzleContinuum } = settings.initial.colorConfig.houndazzle
	substripeCount = dazzleContinuum ? getSubstripeCount({ address, stripeIndex, stripeCount }) : substripeCount
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeCount = substripeCount
	coordinatesOptions.orientation = codeUtilities.wrappedIndex({
		array: options.tileDazzle.tileOrientations,
		index: stripeIndex,
	})

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			address,
			tileColors: substripeModulus({
				substripeIndex,
				nonDazzle: tileColors,
				dazzle: options.tileDazzle.tileColors,
			}),
			colorsIndex,
			getCoordinates,
			coordinatesOptions,
			tileOrigin,
			sizedUnit,
		})
	})
}
