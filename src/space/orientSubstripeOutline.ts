import { rotateCoordinateAboutPoint, tileCenter, Outline, Coordinate, Units } from '../../../../src'

const orientSubstripeOutline: {
	({}: {
		colorsCount: number, shapeColorIndex: number, outline: Outline, tileOrigin: Coordinate, tileSize: Units,
	}): Outline,
} = ({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return outline.map(coordinate => rotateCoordinateAboutPoint({
		coordinate,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export default orientSubstripeOutline
