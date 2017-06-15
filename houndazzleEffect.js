import tileToHoundazzleShapes from './tileToHoundazzleShapes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'

export default {
	state: {
		tileConfig: {
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: tileToHoundazzleShapes
		},
		colorConfig: {
			mode: 'HOUNDAZZLE',
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: false,
				orientationConfig: { set: [ 'HORIZONTAL', 'VERTICAL' ] },
				colorConfig: {
					assignment: {
						offsetSetForGridIndex: () => 1
					}
				}
			}
		}
	}
}
