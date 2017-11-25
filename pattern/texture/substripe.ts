import { Outline, solid, to } from '../../../../src'
import { main as orientSubstripeOutline } from './orientSubstripeOutline'
import { main as substripeOutline } from './substripeOutline'
import { SubstripeParams } from './types'

const substripe: (_: SubstripeParams) => void =
	(params: SubstripeParams): void => {
		const { tileSize, shapeColorIndex, substripeIndex, substripeCount }: SubstripeParams = params
		let outline: Outline = substripeOutline({ tileSize, substripeIndex, substripeCount })
		outline = orientSubstripeOutline({ shapeColorIndex, outline })
		solid.main({ outline, shapeColorIndex: to.ShapeColorIndex(substripeIndex) })
	}

export { substripe as main }
