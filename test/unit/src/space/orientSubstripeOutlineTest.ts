import * as src from '../../../../../../src'
import * as to from '../../../../../../src/utilities/to'
import { orientSubstripeOutline } from '../../../../src/space/orientSubstripeOutline'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedCoordinate = []
		spyOn(src, 'rotateCoordinateAboutPoint').and.returnValue(rotatedCoordinate)
		const tileCenter = []
		spyOn(src, 'tileCenter').and.returnValue(tileCenter)

		const coordinate = []

		const shapeColorCount = Math.PI
		const shapeColorIndex = to.ShapeColorIndex(7)
		const tileOrigin = to.Coordinate([])
		const tileSize = to.Unit(42)
		const outline = to.Outline([ coordinate ])

		const actualOutline = orientSubstripeOutline({ shapeColorCount, shapeColorIndex, outline, tileOrigin, tileSize })

		expect(src.tileCenter).toHaveBeenCalledWith({ tileSize, tileOrigin })
		expect(src.rotateCoordinateAboutPoint).toHaveBeenCalledWith({
			coordinate,
			point: tileCenter,
			rotation: 7,
		})
		expect(actualOutline[ 0 ]).toBe(rotatedCoordinate)
	})
})
