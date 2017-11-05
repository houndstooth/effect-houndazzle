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
import { getFromBaseOrDefaultPattern } from '../../../../src/store/getFromBaseOrDefaultPattern'

const orientSubstripeOutline: (_: ComponentParams) => Outline =
	({ outline, shapeColorIndex, tileOrigin, tileSize }: ComponentParams): Outline => {
		const tileColorCount: number = getFromBaseOrDefaultPattern('colorSet').length
		const rotationUnit: number = Math.PI / tileColorCount
		const rotation: Radian = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

		return outline.map((coordinate: Coordinate) => rotateCoordinate({
			coordinate,
			fixedCoordinate: tileCenter({ tileOrigin, tileSize }),
			rotation,
		}))
	}

export { orientSubstripeOutline }
