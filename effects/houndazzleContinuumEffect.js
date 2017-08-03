import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getDazzle from '../src/utilities/getDazzle'
import substripeOfSquareOutline from '../src/outlines/substripeOfSquareOutline'
import substripeOfStripeOutline from '../src/outlines/substripeOfStripeOutline'

export default {
	name: 'houndazzle continuum',
	basePattern: {
		tileSettings: {
			tileSizeSetting: 100,
			isTileUniform: isHoundazzleTileUniform,
			tileToShapes: substripes,
			getOutline: {
				whenTileIsUniform: substripeOfSquareOutline,
				whenTileIsMultiform: substripeOfStripeOutline,
			},
		},
		gatherOptions: {
			getDazzle,
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
		gridSettings: {
			gridSize: 8,
		},
	},
}
