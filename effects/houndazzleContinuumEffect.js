import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getDazzle from '../src/utilities/getDazzle'
import substripeOfSquareCoordinates from '../src/shapes/substripeOfSquareCoordinates'
import substripeOfStripeCoordinates from '../src/shapes/substripeOfStripeCoordinates'

export default {
	initial: {
		gridConfig: {
			gridSize: 8,
		},
		gatherOptions: {
			getDazzle,
		},
		tileConfig: {
			tileSize: 100,
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes,
			getCoordinates: {
				whenTileIsUniform: substripeOfSquareCoordinates,
				whenTileIsMultiform: substripeOfStripeCoordinates,
			},
		},
		colorConfig: {
			mode: 'HOUNDAZZLE',
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: true,
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
