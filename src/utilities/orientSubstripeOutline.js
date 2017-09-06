import rotationUtilities from '../../../../src/utilities/rotationUtilities'
import componentUtilities from '../../../../src/utilities/componentUtilities'

export default ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return rotationUtilities.rotateCoordinatesAboutPoint({
		coordinates: outline,
		point: componentUtilities.tileCenter({ tileOrigin, tileSize }),
		rotation,
	})
}
