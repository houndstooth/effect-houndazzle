import src from '../../../../src'

export default ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return outline.map(coordinate => src.rotateCoordinateAboutPoint({
		coordinate,
		point: src.tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}
