import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import substripeModulus from './substripeModulus'
import shape from '../shared/components/shape'
import wrappedIndex from '../shared/utilities/wrappedIndex'
import houndazzleShapes from './houndazzleShapes'

const shapeWrapper = ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesOptions, coordinatesFunction }) => {
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

export default (args) => {
	const { substripeOfSquare, substripeOfStripe } = houndazzleShapes
	args.coordinatesFunction = args.coordinatesOptions ? substripeOfStripe : substripeOfSquare
	shapeWrapper(args)
}