import {
	Coordinate,
	from,
	Outline,
	rotate,
	ShapeColorIndex,
	tileCenter,
	to,
	Unit,
} from '../../../../src'

const orientSubstripeOutline: (_: {
	outline: Outline, shapeColorCount: number, shapeColorIndex: ShapeColorIndex, tileOrigin: Coordinate, tileSize: Unit,
}) => Outline = ({ outline, shapeColorCount, shapeColorIndex, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / shapeColorCount
	const rotation = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

	return outline.map(coordinate => rotate({
		fixedPoint: tileCenter({ tileOrigin, tileSize }),
		point: coordinate,
		rotation,
	}))
}

export { orientSubstripeOutline }
