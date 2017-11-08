import {
	ComponentParams,
	constants,
	Coordinate,
	Outline,
	Radian,
	rotateCoordinate,
	Unit,
} from '../../../../src'
import { getFromBaseOrDefaultPattern } from '../../../../src/app/store/getFromBaseOrDefaultPattern'
import * as from from '../../../../src/from'
import * as to from '../../../../src/to'

const orientSubstripeOutline: (_: ComponentParams) => Outline =
	({ outline, shapeColorIndex }: ComponentParams): Outline => {
		const tileColorCount: number = getFromBaseOrDefaultPattern('colorSet').length
		const rotationUnit: number = Math.PI / tileColorCount
		const rotation: Radian = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

		return outline.map((coordinate: Coordinate) => rotateCoordinate({
			coordinate,
			fixedCoordinate: gridCenter(),
			rotation,
		}))
	}

const gridCenter: () => Coordinate =
	(): Coordinate => {
		const tileResolution: number = getFromBaseOrDefaultPattern('tileResolution')
		const tileSize: Unit = getFromBaseOrDefaultPattern('tileSize')
		const aDimension: number = from.Unit(tileSize) * tileResolution * constants.HALF

		return to.Coordinate([ aDimension, aDimension ])
	}

export { orientSubstripeOutline }
