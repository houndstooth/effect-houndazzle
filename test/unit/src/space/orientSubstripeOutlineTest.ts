import * as src from '../../../../../../src'
import { Unit } from '../../../../../../src/components'
import { ShapeColorIndex } from '../../../../../../src/components/types'
import { Coordinate, Outline } from '../../../../../../src/space/types'
import * as to from '../../../../../../src/utilities/to'
import { orientSubstripeOutline } from '../../../../src/space/orientSubstripeOutline'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedCoordinate: Coordinate = to.Coordinate([])
		spyOn(src, 'rotateCoordinate').and.returnValue(rotatedCoordinate)
		const tileCenter: Coordinate = to.Coordinate([])
		spyOn(src, 'tileCenter').and.returnValue(tileCenter)

		const coordinate: Coordinate = to.Coordinate([])

		const shapeColorCount: number = Math.PI
		const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(7)
		const tileOrigin: Coordinate = to.Coordinate([])
		const tileSize: Unit = to.Unit(42)
		const outline: Outline = to.Outline([ coordinate ])

		const actualOutline: Outline = orientSubstripeOutline({
			outline,
			shapeColorCount,
			shapeColorIndex,
			tileOrigin,
			tileSize,
		})

		expect(src.tileCenter).toHaveBeenCalledWith({ tileSize, tileOrigin })
		expect(src.rotateCoordinate).toHaveBeenCalledWith({
			coordinate,
			fixedCoordinate: tileCenter,
			rotation: 7,
		})
		expect(actualOutline[ 0 ]).toBe(rotatedCoordinate)
	})
})
