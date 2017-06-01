import flipXAndY from './flipXAndY'
import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import substripeModulus from './substripeModulus'
import shape from '../shared/components/shape'

const calculateHoundazzleSolidTileSubstripeCoordinates = ({ origin, sizedUnit, coordinatesFunctionArguments }) => {
	const { substripeUnit, orientation, substripeIndex } = coordinatesFunctionArguments
	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	let coordinates = [
		[
			origin[ 0 ] + substripeStart,
			origin[ 1 ]
		],
		[
			origin[ 0 ] + substripeEnd,
			origin[ 1 ]
		],
		[
			origin[ 0 ] + substripeEnd,
			origin[ 1 ] + sizedUnit
		],
		[
			origin[ 0 ] + substripeStart,
			origin[ 1 ] + sizedUnit
		],
	]

	if (orientation === "HORIZONTAL") coordinates = flipXAndY({ coordinates, origin })

	return coordinates
}

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