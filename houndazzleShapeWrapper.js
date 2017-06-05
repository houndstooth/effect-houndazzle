import state from '../../state/state'
import shape from '../../components/shape'
import codeUtilities from '../../utilities/codeUtilities'
import substripeModulus from './substripeModulus'
import houndazzleShapes from './houndazzleShapes'
import getSubstripeCount from './getSubstripeCount'

export default ({ address, tileColors, stripeIndex, stripeCount, tileDazzle, coordinatesOptions, coordinatesFunction }) => {
	const { substripeOfSquare, substripeOfStripe } = houndazzleShapes
	const substripeIsOfStripe = !!coordinatesOptions
	coordinatesFunction = substripeIsOfStripe ? substripeOfStripe : substripeOfSquare

	let { substripeCount, dazzleContinuum } = state.colorConfig.houndazzle
	substripeCount = dazzleContinuum ? getSubstripeCount({ address, stripeIndex, stripeCount }) : substripeCount
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeCount = substripeCount
	coordinatesOptions.orientation = codeUtilities.wrappedIndex({ array: tileDazzle.tileOrientations, index: stripeIndex })

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			address,
			tileColors: substripeModulus({ substripeIndex, nonDazzle: tileColors, dazzle: tileDazzle.tileColors }),
			stripeIndex,
			coordinatesFunction,
			coordinatesOptions
		})
	})
}
