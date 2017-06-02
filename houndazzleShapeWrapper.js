import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import shape from '../shared/components/shape'
import wrappedIndex from '../shared/utilities/wrappedIndex'
import substripeModulus from './substripeModulus'
import houndazzleShapes from './houndazzleShapes'

export default ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesOptions, coordinatesFunction }) => {
	const { substripeOfSquare, substripeOfStripe } = houndazzleShapes
	coordinatesFunction = coordinatesOptions ? substripeOfStripe : substripeOfSquare

	const { substripeCount } = state.shared.colorConfig.houndazzle
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeUnit = sizedUnit / substripeCount
	coordinatesOptions.orientation = wrappedIndex({ array: dazzle.orientations, index: stripeIndex })

	iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			origin,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			rotation,
			sizedUnit,
			stripeIndex,
			coordinatesFunction,
			coordinatesOptions
		})
	})
}