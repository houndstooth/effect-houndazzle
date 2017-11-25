import { codeUtilities, ExecuteTextureParams } from '../../../../src'
// tslint:disable-next-line:no-reaching-imports
import { main as getFromBaseOrDefaultPattern } from '../../../../src/app/store/getFromBaseOrDefaultPattern'
import { SUBSTRIPE_COUNT, SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { main as substripe } from './substripe'

const substripeTexture: (_: ExecuteTextureParams) => void =
	({ shapeColorIndex, tileSize }: ExecuteTextureParams): void => {
		const tileResolution: number = getFromBaseOrDefaultPattern('tileResolution')
		const substripeCount: number = SUBSTRIPE_COUNT * SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE * tileResolution

		codeUtilities.iterator(substripeCount).forEach((substripeIndex: number) => {
			substripe({
				shapeColorIndex,
				substripeCount,
				substripeIndex,
				tileSize,
			})
		})
	}

export { substripeTexture as main }
