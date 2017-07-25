import flipXAndY from '../utilities/flipXAndY'

export default ({ tileOrigin, tileSize, outlineOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	const { orientation, substripeIndex, substripeCount } = outlineOptions
	const substripeUnit = tileSize / substripeCount
	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	let outline = [
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

	if (orientation === 'HORIZONTAL') outline = flipXAndY({ coordinates: outline, tileOrigin })

	return outline
}
