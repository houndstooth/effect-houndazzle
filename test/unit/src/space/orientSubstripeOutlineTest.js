import orientSubstripeOutline from '../../../../src/space/orientSubstripeOutline'
import * as src from '../../../../../../src/index'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedCoordinate = []
		spyOn(src, 'rotateCoordinateAboutPoint').and.returnValue(rotatedCoordinate)
		const tileCenter = []
		spyOn(src, 'tileCenter').and.returnValue(tileCenter)

		const coordinate = []

		const colorsCount = Math.PI
		const shapeColorIndex = 7
		const tileOrigin = []
		const tileSize = []
		const outline = [ coordinate ]

		const actualOutline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })

		expect(src.tileCenter).toHaveBeenCalledWith({ tileSize, tileOrigin })
		expect(src.rotateCoordinateAboutPoint).toHaveBeenCalledWith({
			coordinate,
			point: tileCenter,
			rotation: 7,
		})
		expect(actualOutline[ 0 ]).toBe(rotatedCoordinate)
	})
})