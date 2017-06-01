import calculateHoundazzleSolidTileSubstripeCoordinates from './calculateHoundazzleSolidTileSubstripeCoordinates'
import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import substripeModulus from './substripeModulus'
import shape from '../shared/components/shape'

export default ({ origin, colors, rotation, sizedUnit, dazzle }) => {
	const { substripeCount } = state.shared.colorConfig.houndazzle
	const orientation = dazzle.orientations[ 0 ]
	iterator(substripeCount).forEach(substripeIndex => {
		shape({
			origin,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			rotation,
			sizedUnit,
			coordinatesFunction: calculateHoundazzleSolidTileSubstripeCoordinates,
			coordinatesFunctionArguments: {
				substripeUnit: sizedUnit / substripeCount,
				orientation,
				substripeIndex
			}
		})
	})
}