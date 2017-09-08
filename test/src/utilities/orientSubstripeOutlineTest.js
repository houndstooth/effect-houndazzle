import orientSubstripeOutline from '../../../src/utilities/orientSubstripeOutline'
import rotationUtilities from '../../../../../src/utilities/rotationUtilities'
import components from '../../../../../src/components'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedOutline = []
		spyOn(rotationUtilities, 'rotateCoordinatesAboutPoint').and.returnValue(rotatedOutline)
		const tileCenter = []
		spyOn(components, 'tileCenter').and.returnValue(tileCenter)

		const colorsCount = Math.PI
		const shapeColorIndex = 7
		const tileOrigin = []
		const tileSize = []
		const outline = []

		const actualOutline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })

		expect(components.tileCenter).toHaveBeenCalledWith({ tileSize, tileOrigin })
		expect(rotationUtilities.rotateCoordinatesAboutPoint).toHaveBeenCalledWith({
			coordinates: outline,
			point: tileCenter,
			rotation: 7,
		})
		expect(actualOutline).toBe(rotatedOutline)
	})
})
