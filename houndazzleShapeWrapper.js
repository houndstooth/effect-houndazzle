import state from '../../state/state'
import iterator from '../../utilities/iterator'
import shape from '../../components/shape'
import wrappedIndex from '../../utilities/wrappedIndex'
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
	coordinatesOptions.orientation = wrappedIndex({ array: tileDazzle.tileOrientations, index: stripeIndex })

	iterator(substripeCount).forEach(substripeIndex => {
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
