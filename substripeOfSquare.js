import flipXAndY from './flipXAndY'

export default ({ shapeOrigin, sizedUnit, coordinatesOptions }) => {
	const x = shapeOrigin[ 0 ]
	const y = shapeOrigin[ 1 ]

	const { orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = sizedUnit / substripeCount
	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	let coordinates = [
		[
			x + substripeStart,
			y
		],
		[
			x + substripeEnd,
			y
		],
		[
			x + substripeEnd,
			y + sizedUnit
		],
		[
			x + substripeStart,
			y + sizedUnit
		],
	]

	if (orientation === "HORIZONTAL") coordinates = flipXAndY({ coordinates, shapeOrigin })

	return coordinates
}
