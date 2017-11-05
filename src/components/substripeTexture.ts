import { ExecuteTextureParams } from '../../../../src'
import { iterator } from '../../../../src/utilities/codeUtilities'
import { SUBSTRIPE_COUNT, SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { substripe } from './substripe'
import { getFromBaseOrDefaultPattern } from '../../../../src/store/getFromBaseOrDefaultPattern'

const substripeTexture: (_: ExecuteTextureParams) => void =
	({ shapeColorIndex, tileSize }: ExecuteTextureParams): void => {
		const tileResolution = getFromBaseOrDefaultPattern('tileResolution')
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
