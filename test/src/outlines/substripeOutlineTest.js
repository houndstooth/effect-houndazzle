import substripeOutline from '../../../src/outlines/substripeOutline'
import rotationUtilities from '../../../../../src/utilities/rotationUtilities'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		const tileOrigin = [ 11, 17 ]
		const tileSize = 13
		const substripeIndex = 1
		const substripeCount = 7
		const colorsCount = 5
		const shapeColorIndex = 3

		const rotatedCoordinates = []
		spyOn(rotationUtilities, 'rotateCoordinatesAboutPoint').and.returnValue(rotatedCoordinates)

		const expectedBaseSubstripeOutline = [
			[ 11 - (13/2), 17 - (13/2) + ((13/7) * 2) ],
			[ 11 + 13 + (13/2), 17 - (13/2) + ((13/7) * 2) ],
			[ 11 + 13 + (13/2), 17 - (13/2) + ((13/7) * 2) + ((13/7) * 2) ],
			[ 11 - (13/2), 17 - (13/2) + ((13/7) * 2) + ((13/7) * 2) ],
		]


		const outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount, colorsCount, shapeColorIndex })


		expect(rotationUtilities.rotateCoordinatesAboutPoint).toHaveBeenCalledWith({
			coordinates: expectedBaseSubstripeOutline,
			point: [ 11 + (13/2), 17 + (13/2) ],
			rotation: 3 * Math.PI / 5,
		})
		expect(outline).toBe(rotatedCoordinates)
	})
})
