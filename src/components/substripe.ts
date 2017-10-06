import { substripeOutline, orientSubstripeOutline } from '../space'
import { solid } from '../../../../src'

const substripe = ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}

export default substripe
