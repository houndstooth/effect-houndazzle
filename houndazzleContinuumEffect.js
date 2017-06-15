import houndazzleShapes from './houndazzleShapes'
import isHoundazzleTileUniform from './isHoundazzleTileUniform'

export default {
	state: {
		gridConfig: {
			gridSize: 8,
		},
		tileConfig: {
			tileSize: 100,
			isTileUniform: isHoundazzleTileUniform
		},
		colorConfig: {
			mode: 'HOUNDAZZLE',
			houndazzle: {
				substripeCount: 16,
				dazzleContinuum: true,
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
