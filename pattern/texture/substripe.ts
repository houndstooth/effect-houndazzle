import { Outline, solid, to } from '../../../../src'
import { orientSubstripeOutline } from './orientSubstripeOutline'
import { substripeOutline } from './substripeOutline'
import { SubstripeParams } from './types'

const substripe: (_: SubstripeParams) => void =
	(params: SubstripeParams): void => {
		const { tileSize, shapeColorIndex, substripeIndex, substripeCount }: SubstripeParams = params
		let outline: Outline = substripeOutline({ tileSize, substripeIndex, substripeCount })
		outline = orientSubstripeOutline({ shapeColorIndex, outline })
		solid({ outline, shapeColorIndex: to.ShapeColorIndex(substripeIndex) })
	}

export { substripe }
