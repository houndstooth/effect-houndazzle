import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getDazzle from '../src/utilities/getDazzle'
import substripeOfSquareCoordinates from '../src/shapes/substripeOfSquareCoordinates'
import substripeOfStripeCoordinates from '../src/shapes/substripeOfStripeCoordinates'

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
