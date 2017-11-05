import { to } from '../../../../../../src'
import { ShapeColorIndex, Unit } from '../../../../../../src/components/types'
import * as src from '../../../../../../src/index'
import { Outline } from '../../../../../../src/space'
import { Coordinate } from '../../../../../../src/space/types'
import { substripe } from '../../../../src/components/substripe'
import * as space from '../../../../src/space/index'

describe('substripe', () => {
	const tileOrigin: Coordinate = to.Coordinate([ 11, 17 ])
	const tileSize: Unit = to.Unit(13)
	const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(1)
	const substripeIndex: number = 5
	const substripeCount: number = 17

	const outline: Outline = []
	const orientedOutline: Outline = []

	beforeEach(() => {
		spyOn(space, 'substripeOutline').and.returnValue(outline)
		spyOn(space, 'orientSubstripeOutline').and.returnValue(orientedOutline)
		spyOn(src, 'solid')

		substripe({ tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount })
	})

	it('gets the substripe outline', () => {
		expect(space.substripeOutline).toHaveBeenCalledWith({
			substripeCount,
			substripeIndex,
			tileOrigin,
			tileSize,
		})
	})

	it('orients the outline', () => {
		expect(space.orientSubstripeOutline).toHaveBeenCalledWith({
			outline,
			shapeColorIndex,
			tileOrigin,
			tileSize,
		})
	})

	it('sends the result to be rendered as a solid filled path', () => {
		expect(src.solid).toHaveBeenCalledWith({
			outline: orientedOutline,
			shapeColorIndex: substripeIndex,
		})
	})
})
