import {
	from,
	Outline,
	rotateCoordinate,
	ShapeColorIndex,
	tileCenter,
	to,
} from '../../../../src'
import { TileOriginAndSize } from '../../../../src/components/types/TileOriginAndSize'

interface OrientSubstripeOutlineParams extends TileOriginAndSize {
	outline: Outline,
	shapeColorCount: number,
	shapeColorIndex: ShapeColorIndex,
}

const orientSubstripeOutline: (_: OrientSubstripeOutlineParams) => Outline = ({ outline, shapeColorCount, shapeColorIndex, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / shapeColorCount
	const rotation = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

	return outline.map(coordinate => rotateCoordinate({
		coordinate,
		fixedCoordinate: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export { orientSubstripeOutline }
