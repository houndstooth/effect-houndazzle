import { Context, Coordinate, ShapeColorIndex, solid, to, Unit } from '../../../../src'
import { orientSubstripeOutline, substripeOutline } from '../space'

const substripe: (_: {
	context: Context,
	shapeColorCount: number,
	shapeColorIndex: ShapeColorIndex,
	substripeCount: number,
	substripeIndex: number,
	tileOrigin: Coordinate,
	tileSize: Unit,
}) => void = ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, shapeColorCount }) => {
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ shapeColorCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: to.ShapeColorIndex(substripeIndex) })
}

export { substripe }
