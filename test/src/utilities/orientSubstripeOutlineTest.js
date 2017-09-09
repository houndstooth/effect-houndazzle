import orientSubstripeOutline from '../../../src/utilities/orientSubstripeOutline'
import components from '../../../../../src/components'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedOutline = []
		const rotateOutlineAboutPointSpy = jasmine.createSpy().and.returnValue(rotatedOutline)
		orientSubstripeOutline.__Rewire__('rotateOutlineAboutPoint', rotateOutlineAboutPointSpy)
		const tileCenter = []
		spyOn(components, 'tileCenter').and.returnValue(tileCenter)

		const colorsCount = Math.PI
		const shapeColorIndex = 7
		const tileOrigin = []
		const tileSize = []
		const outline = []

		const actualOutline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })

		expect(components.tileCenter).toHaveBeenCalledWith({ tileSize, tileOrigin })
		expect(rotateOutlineAboutPointSpy).toHaveBeenCalledWith({
			outline,
			point: tileCenter,
			rotation: 7,
		})
		expect(actualOutline).toBe(rotatedOutline)
	})
})
