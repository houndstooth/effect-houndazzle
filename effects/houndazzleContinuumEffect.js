import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getDazzle from '../src/utilities/getDazzle'
import substripeOfSquareCoordinates from '../src/shapes/substripeOfSquareCoordinates'
import substripeOfStripeCoordinates from '../src/shapes/substripeOfStripeCoordinates'

export default {
	base: {
		gridSettings: {
			gridSize: 8,
		},
		gatherOptions: {
			getDazzle,
		},
		tileSettings: {
			tileSize: 100,
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes,
			getCoordinates: {
				whenTileIsUniform: substripeOfSquareCoordinates,
				whenTileIsMultiform: substripeOfStripeCoordinates,
			},
		},
		colorSettings: {
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: true,
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
