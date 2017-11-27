import { codeUtilities, ExecuteTextureParams, getSetting } from '../../../../src'
import { SUBSTRIPE_COUNT, SUFFICIENT_FACTOR_TO_GUARANTEE_TILE_COVERAGE } from '../constants'
import { main as substripe } from './substripe'

const substripeTexture: (_: ExecuteTextureParams) => void =
	({ shapeColorIndex, tileSize }: ExecuteTextureParams): void => {
		const tileResolution: number = getSetting.main('tileResolution')
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
