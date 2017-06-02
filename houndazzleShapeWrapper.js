import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import substripeModulus from './substripeModulus'
import shape from '../shared/components/shape'
import wrappedIndex from '../shared/utilities/wrappedIndex'
import houndazzleShapes from './houndazzleShapes'

const squareShapeWrapper = ({ origin, colors, rotation, sizedUnit, dazzle }) => {
	const { substripeCount } = state.shared.colorConfig.houndazzle
	const orientation = dazzle.orientations[ 0 ]
	iterator(substripeCount).forEach(substripeIndex => {
		shape({
			origin,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			rotation,
			sizedUnit,
			coordinatesFunction: houndazzleShapes.substripeOfSquare,
			coordinatesOptions: {
				substripeUnit: sizedUnit / substripeCount,
				orientation,
				substripeIndex
			}
		})
	})
}

const stripeShapeWrapper = ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesOptions }) => {
	const { substripeCount } = state.shared.colorConfig.houndazzle
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
			coordinatesFunction: houndazzleShapes.substripeOfStripe,
			coordinatesOptions
		})
	})
}

export default (args) => {
	const shapeWrapper = args.coordinatesOptions ? stripeShapeWrapper : squareShapeWrapper
	shapeWrapper(args)
}