import substripes from '../src/components/substripes'
import isHoundazzleTileUniform from '../src/utilities/isHoundazzleTileUniform'
import getSubstripeTexture from '../src/utilities/getSubstripeTexture'
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
			getSubstripeTexture,
		},
		colorSettings: {
			substripeTextureSettings: {
				substripeCount: 16,
				substripeCountContinuumMode: false,
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
