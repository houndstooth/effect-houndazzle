import { ShapeColorIndex, solid, to } from '../../../../src'
import { orientSubstripeOutline, substripeOutline } from '../space'
import { SubstripeOutlineParams } from '../space'

interface SubstripeParams extends SubstripeOutlineParams {
	shapeColorCount: number,
	shapeColorIndex: ShapeColorIndex,
}

const substripe: (_: SubstripeParams) => void = params => {
	const { tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, shapeColorCount } = params
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ shapeColorCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ outline, shapeColorIndex: to.ShapeColorIndex(substripeIndex) })
}

export { substripe }
