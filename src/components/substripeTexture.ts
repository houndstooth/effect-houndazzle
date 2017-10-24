import { ExecuteTexture } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { SUBSTRIPE_COUNT, SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { substripe } from './substripe'

const substripeTexture: ExecuteTexture = ({ shapeColorIndex, shapeColorCount, tileOrigin, tileSize }) => {
	const substripeCount = SUBSTRIPE_COUNT * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE

	iterator(substripeCount).forEach(substripeIndex => {
		substripe({
			shapeColorCount,
			shapeColorIndex,
			substripeCount,
			substripeIndex,
			tileOrigin,
			tileSize,
		})
	})
}

export { substripeTexture }
