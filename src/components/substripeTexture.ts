import { ExecuteTextureParams } from '../../../../src'
import { getFromBaseOrDefaultPattern } from '../../../../src/store/getFromBaseOrDefaultPattern'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { SUBSTRIPE_COUNT, SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { substripe } from './substripe'

const substripeTexture: (_: ExecuteTextureParams) => void =
	({ shapeColorIndex, tileSize }: ExecuteTextureParams): void => {
		const tileResolution: number = getFromBaseOrDefaultPattern('tileResolution')
		const substripeCount: number = SUBSTRIPE_COUNT * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE * tileResolution

		iterator(substripeCount).forEach((substripeIndex: number) => {
			substripe({
				shapeColorIndex,
				substripeCount,
				substripeIndex,
				tileSize,
			})
		})
	}

export { substripeTexture }
