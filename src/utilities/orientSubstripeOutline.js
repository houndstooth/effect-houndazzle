import rotationUtilities from '../../../../src/utilities/rotationUtilities'
import tileCenter from '../../../../src/components/tileCenter'

export default ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return rotationUtilities.rotateCoordinatesAboutPoint({
		coordinates: outline,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	})
}
