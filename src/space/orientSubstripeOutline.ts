import {
	ComponentParams,
	from,
	Outline,
	rotateCoordinate,
	tileCenter,
	to,
} from '../../../../src'

const orientSubstripeOutline: (_: ComponentParams) => Outline = params => {
	const { outline, shapeColorCount, shapeColorIndex, tileOrigin, tileSize } = params
	const rotationUnit = Math.PI / shapeColorCount
	const rotation = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

	return outline.map(coordinate => rotateCoordinate({
		coordinate,
		fixedCoordinate: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export { orientSubstripeOutline }
