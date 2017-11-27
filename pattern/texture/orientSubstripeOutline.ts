import {
	ComponentParams,
	constants,
	Coordinate,
	from,
	getSetting,
	Outline,
	Radian,
	rotateCoordinate,
	to,
	Unit,
} from '../../../../src'

const orientSubstripeOutline: (_: ComponentParams) => Outline =
	({ outline, shapeColorIndex }: ComponentParams): Outline => {
		const tileColorCount: number = getSetting.main('colorSet').length
		const rotationUnit: number = Math.PI / tileColorCount
		const rotation: Radian = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

		return outline.map((coordinate: Coordinate) => rotateCoordinate.main({
			coordinate,
			fixedCoordinate: gridCenter(),
			rotation,
		}))
	}

const gridCenter: () => Coordinate =
	(): Coordinate => {
		const tileResolution: number = getSetting.main('tileResolution')
		const tileSize: Unit = getSetting.main('tileSize')
		const aDimension: number = from.Unit(tileSize) * tileResolution * constants.HALF

		return to.Coordinate([ aDimension, aDimension ])
	}

export { orientSubstripeOutline as main }
