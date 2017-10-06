import { rotateCoordinateAboutPoint, tileCenter } from '../../../../src'

const orientSubstripeOutline = ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return outline.map(coordinate => rotateCoordinateAboutPoint({
		coordinate,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export default orientSubstripeOutline
