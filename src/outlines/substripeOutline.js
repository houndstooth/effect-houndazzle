import componentUtilities from '../../../../src/utilities/componentUtilities'
import rotationUtilities from '../../../../src/utilities/rotationUtilities'

export default ({ tileOrigin, tileSize, substripeIndex, substripeCount, colorsCount, shapeColorIndex }) => {
	const substripeWidth = tileSize * 2 / substripeCount
	const substripeSlack = tileSize / 2

	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	const baseSubstripeOutline = [
		[
			x - substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + tileSize + substripeSlack,
			y - substripeSlack + substripeIndex * substripeWidth,
		],
		[
			x + tileSize + substripeSlack,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth,
		],
		[
			x - substripeSlack,
			y - substripeSlack + (substripeIndex + 1) * substripeWidth,
		],
	]

	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return rotationUtilities.rotateCoordinatesAboutPoint({
		coordinates: baseSubstripeOutline,
		point: componentUtilities.tileCenter({ tileOrigin, tileSize }),
		rotation,
	})
}
