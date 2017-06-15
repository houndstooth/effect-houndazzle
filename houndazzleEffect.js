import houndazzleShapes from './houndazzleShapes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'

export default {
	state: {
		tileConfig: {
			isTileUniform: isHoundazzleTileUniform
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
		},
		shapes: houndazzleShapes
	}
}
