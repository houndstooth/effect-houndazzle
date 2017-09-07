import substripeOutline from '../outlines/substripeOutline'
import orientSubstripeOutline from '../utilities/orientSubstripeOutline'
import solid from '../../../../src/components/solid'

export default ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}
