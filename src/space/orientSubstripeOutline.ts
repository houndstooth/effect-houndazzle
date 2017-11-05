import {
	ComponentParams,
	Coordinate,
	from,
	Outline,
	Radian,
	rotateCoordinate,
	to,
} from '../../../../src'
import { Unit } from '../../../../src/components/types'
import { HALF } from '../../../../src/constants'
import { getFromBaseOrDefaultPattern } from '../../../../src/store/getFromBaseOrDefaultPattern'

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
		const aDimension: number = from.Unit(tileSize) * tileResolution * HALF

		return to.Coordinate([ aDimension, aDimension ])
	}

export { orientSubstripeOutline }
