import { Coordinate, Outline, rotateCoordinateAboutPoint, tileCenter, to, Units } from '../../../../src'

const orientSubstripeOutline: (_: {
		colorsCount: number, outline: Outline, shapeColorIndex: number, tileOrigin: Coordinate, tileSize: Units,
	}) => Outline = ({ colorsCount, outline, shapeColorIndex, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = to.Radian(rotationUnit * shapeColorIndex)

	return outline.map(coordinate => rotateCoordinateAboutPoint({
		coordinate,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export { orientSubstripeOutline }
