import orientSubstripeOutline from '../../../src/outlines/orientSubstripeOutline'
import src from '../../../../../src'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedOutline = []
		spyOn(src, 'rotateOutlineAboutPoint').and.returnValue(rotatedOutline)
		const tileCenter = []
		spyOn(src, 'tileCenter').and.returnValue(tileCenter)

		const colorsCount = Math.PI
		const shapeColorIndex = 7
		const tileOrigin = []
		const tileSize = []
		const outline = []

		const actualOutline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })

		expect(src.tileCenter).toHaveBeenCalledWith({ tileSize, tileOrigin })
		expect(src.rotateOutlineAboutPoint).toHaveBeenCalledWith({
			outline,
			point: tileCenter,
			rotation: 7,
		})
		expect(actualOutline).toBe(rotatedOutline)
	})
})
