import flipXAndY from './flipXAndY'

export default ({ origin, sizedUnit, coordinatesOptions }) => {
	const { orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = sizedUnit / substripeCount
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
