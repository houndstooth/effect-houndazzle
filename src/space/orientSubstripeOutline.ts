import { Coordinate, Outline, rotateCoordinateAboutPoint, tileCenter, Units } from '../../../../src'

const orientSubstripeOutline: {
	({}: {
		colorsCount: number, outline: Outline, shapeColorIndex: number, tileOrigin: Coordinate, tileSize: Units,
	}): Outline,
} = ({ colorsCount, outline, shapeColorIndex, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex as any

	return outline.map(coordinate => rotateCoordinateAboutPoint({
		coordinate,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export default orientSubstripeOutline
