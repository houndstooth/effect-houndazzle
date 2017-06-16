import substripes from './substripes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'
import getDazzle from './getDazzle'

export default {
	state: {
		tileConfig: {
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes
		},
		gatherOptions: {
			getDazzle
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
