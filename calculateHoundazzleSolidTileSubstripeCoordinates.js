import flipXAndY from './flipXAndY'
import state from '../shared/state/state'

export default ({ origin, sizedUnit, substripeIndex, coordinatesFunctionArguments  }) => {
	const { substripeUnit } = coordinatesFunctionArguments
	const currentSubstripePosition = substripeIndex * substripeUnit
	const nextSubstripePosition = currentSubstripePosition + substripeUnit

	let coordinates = [
		[
			origin[ 0 ] + currentSubstripePosition,
			origin[ 1 ]
		],
		[
			origin[ 0 ] + nextSubstripePosition,
			origin[ 1 ]
		],
		[
			origin[ 0 ] + nextSubstripePosition,
			origin[ 1 ] + sizedUnit
		],
		[
			origin[ 0 ] + currentSubstripePosition,
			origin[ 1 ] + sizedUnit
		],
	]

	const { orientations, orientationAssignments } = state.shared.color.houndazzle.orientation
	const orientation = orientations[ Math.abs(substripeIndex % orientations.length) ]

	if (orientation === "HORIZONTAL") coordinates = flipXAndY({ coordinates, origin })

	return coordinates
}
