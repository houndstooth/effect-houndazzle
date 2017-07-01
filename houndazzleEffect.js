import substripes from './substripes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'
import getDazzle from './getDazzle'
import substripeOfSquareCoordinates from './substripeOfSquareCoordinates'
import substripeOfStripeCoordinates from './substripeOfStripeCoordinates'

export default {
	initial: {
		tileConfig: {
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes,
			getCoordinates: {
				whenTileIsUniform: substripeOfSquareCoordinates,
				whenTileIsMultiform: substripeOfStripeCoordinates,
			},
		},
		gatherOptions: {
			getDazzle,
		},
		colorConfig: {
			mode: 'HOUNDAZZLE',
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: false,
				orientationConfig: { set: [ 'HORIZONTAL', 'VERTICAL' ] },
				colorConfig: {
					assignment: {
						offsetSetForGridIndex: () => 1,
					},
				},
			},
		},
	},
}
