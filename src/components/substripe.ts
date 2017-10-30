import { Outline, solid, to } from '../../../../src'
import { orientSubstripeOutline, substripeOutline } from '../space'
import { SubstripeParams } from './types'

const substripe: (_: SubstripeParams) => void =
	(params: SubstripeParams): void => {
		const { tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, shapeColorCount } = params
		let outline: Outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
		outline = orientSubstripeOutline({ shapeColorCount, shapeColorIndex, outline, tileOrigin, tileSize })
		solid({ outline, shapeColorIndex: to.ShapeColorIndex(substripeIndex) })
	}

export { substripe }
