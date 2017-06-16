import substripes from './substripes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'
import getDazzle from './getDazzle'
import substripeOfSquare from './substripeOfSquare'
import substripeOfStripe from './substripeOfStripe'

export default {
	state: {
		tileConfig: {
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes,
			getCoordinates: {
				whenTileIsUniform: substripeOfSquare,
				whenTileIsMultiform: substripeOfStripe
			}
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
