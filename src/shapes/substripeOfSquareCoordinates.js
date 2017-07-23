import flipXAndY from '../utilities/flipXAndY'

export default ({ tileOrigin, tileSize, coordinatesOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	const { orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = tileSize / substripeCount
	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	let coordinates = [
		[
			x + substripeStart,
			y,
		],
		[
			x + substripeEnd,
			y,
		],
		[
			x + substripeEnd,
			y + tileSize,
		],
		[
			x + substripeStart,
			y + tileSize,
		],
	]

	if (orientation === 'HORIZONTAL') coordinates = flipXAndY({ coordinates, tileOrigin })

	return coordinates
}
