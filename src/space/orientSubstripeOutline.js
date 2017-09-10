import src from '../../../../src'

export default ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return src.rotateOutlineAboutPoint({
		outline,
		point: src.tileCenter({ tileOrigin, tileSize }),
		rotation,
	})
}
