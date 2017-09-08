import rotationUtilities from '../../../../src/utilities/rotationUtilities'
import components from '../../../../src/components'

export default ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return rotationUtilities.rotateCoordinatesAboutPoint({
		coordinates: outline,
		point: components.tileCenter({ tileOrigin, tileSize }),
		rotation,
	})
}
