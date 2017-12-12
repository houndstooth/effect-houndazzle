import {
	ComponentParams,
	constants,
	Coordinate,
	from,
	Outline,
	patternState,
	Radian,
	rotateCoordinate,
	to,
	Unit,
} from '../../../../src'

const orientSubstripeOutline: (_: ComponentParams) => Outline =
	({ outline, shapeColorIndex }: ComponentParams): Outline => {
		const tileColorCount: number = patternState.colorSettings.colorSet.length
		const rotationUnit: number = Math.PI / tileColorCount
		const rotation: Radian = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

		return outline.map((coordinate: Coordinate) => rotateCoordinate.default({
			coordinate,
			fixedCoordinate: gridCenter(),
			rotation,
		}))
	}

const gridCenter: () => Coordinate =
	(): Coordinate => {
		const tileResolution: number = patternState.gridSettings.tileResolution
		const tileSize: Unit = patternState.tileSettings.tileSize
		const aDimension: number = from.Unit(tileSize) * tileResolution * constants.HALF

		return to.Coordinate([ aDimension, aDimension ])
	}

export default orientSubstripeOutline
