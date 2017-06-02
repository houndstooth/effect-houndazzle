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
			coordinatesFunctionArguments: {
				substripeUnit: sizedUnit / substripeCount,
				orientation,
				substripeIndex
			}
		})
	})
}

const stripeShapeWrapper = ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments }) => {
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
			coordinatesFunction: houndazzleShapes.substripeOfStripe,
			coordinatesFunctionArguments
		})
	})
}

export default ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments }) => {
	const shapeWrapper = coordinatesFunctionArguments ? stripeShapeWrapper : squareShapeWrapper
	shapeWrapper({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments })
}