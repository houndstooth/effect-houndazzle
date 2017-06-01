import calculateSubstripeStripeUnionCoordinates from './calculateSubstripeStripeUnionCoordinates'
import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import substripeModulus from './substripeModulus'
import shape from '../shared/components/shape'
import wrappedIndex from '../shared/utilities/wrappedIndex'

export default ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments }) => {
	const { substripeCount } = state.shared.colorConfig.houndazzle
	coordinatesFunctionArguments.substripeUnit = sizedUnit / substripeCount
	coordinatesFunctionArguments.orientation = wrappedIndex({ array: dazzle.orientations, index: stripeIndex })
	iterator(substripeCount).forEach(substripeIndex => {
		coordinatesFunctionArguments.substripeIndex = substripeIndex
		shape({
			origin,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			rotation,
			sizedUnit,
			stripeIndex,
			coordinatesFunction: calculateSubstripeStripeUnionCoordinates,
			coordinatesFunctionArguments
		})
	})
}