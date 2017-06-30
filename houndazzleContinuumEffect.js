import substripes from './substripes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'
import getDazzle from './getDazzle'
import substripeOfSquareCoordinates from './substripeOfSquareCoordinates'
import substripeOfStripeCoordinates from './substripeOfStripeCoordinates'

export default {
	initial: {
		gridConfig: {
			gridSize: 8,
		},
		gatherOptions: {
			getDazzle
		},
		tileConfig: {
			tileSize: 100,
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes,
			getCoordinates: {
				whenTileIsUniform: substripeOfSquareCoordinates,
				whenTileIsMultiform: substripeOfStripeCoordinates
			}
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
