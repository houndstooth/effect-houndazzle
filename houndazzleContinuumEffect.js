import substripes from './substripes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'
import getDazzle from './getDazzle'

export default {
	state: {
		gridConfig: {
			gridSize: 8,
		},
		gatherOptions: {
			getDazzle
		},
		tileConfig: {
			tileSize: 100,
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes
		},
		colorConfig: {
			mode: 'HOUNDAZZLE',
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: true,
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
