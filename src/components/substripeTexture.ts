import { ExecuteTextureParams } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { SUBSTRIPE_COUNT, SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { substripe } from './substripe'

const substripeTexture: (_: ExecuteTextureParams) => void =
	({ shapeColorIndex, shapeColorCount, tileOrigin, tileSize }: ExecuteTextureParams): void => {
		const substripeCount: number = SUBSTRIPE_COUNT * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE

		iterator(substripeCount).forEach((substripeIndex: number) => {
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
