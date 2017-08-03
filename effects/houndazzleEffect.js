import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getDazzle from '../src/utilities/getDazzle'
import substripeOfSquareOutline from '../src/outlines/substripeOfSquareOutline'
import substripeOfStripeOutline from '../src/outlines/substripeOfStripeOutline'

export default {
	name: 'houndazzle',
	basePattern: {
		tileSettings: {
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
