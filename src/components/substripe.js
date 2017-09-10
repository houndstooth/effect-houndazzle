import outlines from '../outlines'
import src from '../../../../src'

export default ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = outlines.substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = outlines.orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	src.solid({ context, outline, shapeColorIndex: substripeIndex })
}
