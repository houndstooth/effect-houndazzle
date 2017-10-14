import { substripeOutline, orientSubstripeOutline } from '../space'
import { solid, Units, Coordinate } from '../../../../src'

type Substripe = {
	({}: {
		context: CanvasRenderingContext2D,
		tileOrigin: Coordinate,
		tileSize: Units,
		shapeColorIndex: number,
		substripeIndex: number,
		substripeCount: number,
		colorsCount: number,
	}): void,
}

const substripe: Substripe = params => {
	const { context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount } = params
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}

export default substripe
