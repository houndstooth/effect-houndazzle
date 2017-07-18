import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getDazzle from '../src/utilities/getDazzle'
import substripeOfSquareCoordinates from '../src/shapes/substripeOfSquareCoordinates'
import substripeOfStripeCoordinates from '../src/shapes/substripeOfStripeCoordinates'

export default {
	initial: {
		tileSettings: {
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
		colorSettings: {
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: false,
				orientationSettings: { set: [ 'HORIZONTAL', 'VERTICAL' ] },
				colorSettings: {
					assignment: {
						offsetSetForGridIndex: () => 1,
					},
				},
			},
		},
	},
}
