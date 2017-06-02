import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import shape from '../shared/components/shape'
import wrappedIndex from '../shared/utilities/wrappedIndex'
import substripeModulus from './substripeModulus'
import houndazzleShapes from './houndazzleShapes'
import calculateSubstripeUnit from './calculateSubstripeUnit'

export default ({ address, size, colors, rotation, stripeIndex, dazzle, coordinatesOptions, coordinatesFunction }) => {
	const { substripeOfSquare, substripeOfStripe } = houndazzleShapes
	coordinatesFunction = coordinatesOptions ? substripeOfStripe : substripeOfSquare

	const { substripeCount } = state.shared.colorConfig.houndazzle
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeUnit = calculateSubstripeUnit({ substripeCount, size })
	coordinatesOptions.orientation = wrappedIndex({ array: dazzle.orientations, index: stripeIndex })

	iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			address,
			size,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			rotation,
			stripeIndex,
			coordinatesFunction,
			coordinatesOptions
		})
	})
}