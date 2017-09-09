import rotateOutlineAboutPoint from '../../../../src/outlines/rotateOutlineAboutPoint'
import components from '../../../../src/components'

export default ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return rotateOutlineAboutPoint({
		outline,
		point: components.tileCenter({ tileOrigin, tileSize }),
		rotation,
	})
}
