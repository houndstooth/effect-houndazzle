import { substripeOutline, orientSubstripeOutline } from '../space'
import { solid, Units, Coordinate, Context } from '../../../../src'

const substripe: {
	({}: {
		colorsCount: number,
		context: Context,
		shapeColorIndex: number,
		substripeCount: number,
		substripeIndex: number,
		tileOrigin: Coordinate,
		tileSize: Units,
	}): void,
} = ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}

export default substripe
