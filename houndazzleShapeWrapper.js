import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import substripeModulus from './substripeModulus'
import shape from '../shared/components/shape'
import wrappedIndex from '../shared/utilities/wrappedIndex'
import houndazzleCoordinates from './houndazzleCoordinates'

const solidShapeWrapper = ({ origin, colors, rotation, sizedUnit, dazzle }) => {
	const { substripeCount } = state.shared.colorConfig.houndazzle
	const orientation = dazzle.orientations[ 0 ]
	iterator(substripeCount).forEach(substripeIndex => {
		shape({
			origin,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			rotation,
			sizedUnit,
			coordinatesFunction: houndazzleCoordinates.calculateHoundazzleSolidTileSubstripeCoordinates,
			coordinatesFunctionArguments: {
				substripeUnit: sizedUnit / substripeCount,
				orientation,
				substripeIndex
			}
		})
	})
}

const stripedShapeWrapper = ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments }) => {
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
			coordinatesFunction: houndazzleCoordinates.calculateSubstripeStripeUnionCoordinates,
			coordinatesFunctionArguments
		})
	})
}

export default ({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments }) => {
	const shapeWrapper = coordinatesFunctionArguments ? stripedShapeWrapper : solidShapeWrapper
	shapeWrapper({ origin, colors, rotation, sizedUnit, stripeIndex, dazzle, coordinatesFunctionArguments })
}