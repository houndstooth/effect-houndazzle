import flipXAndY from '../utilities/flipXAndY'

export default ({ tileOrigin, zoomedTileSize, coordinatesOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	const { orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = zoomedTileSize / substripeCount
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
			y + zoomedTileSize,
		],
		[
			x + substripeStart,
			y + zoomedTileSize,
		],
	]

	if (orientation === 'HORIZONTAL') coordinates = flipXAndY({ coordinates, tileOrigin })

	return coordinates
}
