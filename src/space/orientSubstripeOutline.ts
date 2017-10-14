import { rotateCoordinateAboutPoint, tileCenter, Outline, Coordinate } from '../../../../src'

type OrientSubstripeOutline = {
	({}: {
		colorsCount: number, shapeColorIndex: number, outline: Outline, tileOrigin: Coordinate, tileSize: number,
	}): Outline,
}

const orientSubstripeOutline: OrientSubstripeOutline = params => {
	const { colorsCount, shapeColorIndex, outline, tileOrigin, tileSize } = params
	const rotationUnit = Math.PI / colorsCount
	const rotation = rotationUnit * shapeColorIndex

	return outline.map(coordinate => rotateCoordinateAboutPoint({
		coordinate,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export default orientSubstripeOutline
