import flipXAndY from './flipXAndY'

export default ({ underlyingColor, origin, sizedUnit, substripeIndex, substripeUnit }) => {
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

	if (underlyingColor % 2 === 0) coordinates = flipXAndY({ coordinates, origin })

	return coordinates
}
