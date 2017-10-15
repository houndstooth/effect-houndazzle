import { substripeOutline, orientSubstripeOutline } from '../space'
import { solid, Units, Coordinate, Context } from '../../../../src'

const substripe: {
	({}: {
		context: Context,
		tileOrigin: Coordinate,
		tileSize: Units,
		shapeColorIndex: number,
		substripeIndex: number,
		substripeCount: number,
		colorsCount: number,
	}): void,
} = ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}

export default substripe
