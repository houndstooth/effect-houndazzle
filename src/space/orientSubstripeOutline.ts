import {
	ComponentParams,
	Coordinate,
	from,
	Outline,
	Radian,
	rotateCoordinate,
	tileCenter,
	to,
} from '../../../../src'

const orientSubstripeOutline: (_: ComponentParams) => Outline =
	({ outline, shapeColorCount, shapeColorIndex, tileOrigin, tileSize }: ComponentParams): Outline => {
		const rotationUnit: number = Math.PI / shapeColorCount
		const rotation: Radian = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

		return outline.map((coordinate: Coordinate) => rotateCoordinate({
			coordinate,
			fixedCoordinate: tileCenter({ tileOrigin, tileSize }),
			rotation,
		}))
	}

export { orientSubstripeOutline }
