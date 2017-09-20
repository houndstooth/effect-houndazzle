import space from '../space'
import { solid } from '../../../../src'

export default ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = space.substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = space.orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}
