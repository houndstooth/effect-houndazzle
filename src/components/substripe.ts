import { Outline, solid, to } from '../../../../src'
import { orientSubstripeOutline, substripeOutline } from '../space'
import { SubstripeParams } from './types'

const substripe: (_: SubstripeParams) => void =
	(params: SubstripeParams): void => {
		const { tileSize, shapeColorIndex, substripeIndex, substripeCount } = params
		let outline: Outline = substripeOutline({ tileSize, substripeIndex, substripeCount })
		outline = orientSubstripeOutline({ shapeColorIndex, outline })
		solid({ outline, shapeColorIndex: to.ShapeColorIndex(substripeIndex) })
	}

export { substripe }
