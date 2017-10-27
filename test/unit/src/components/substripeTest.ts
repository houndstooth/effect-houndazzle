import { to } from '../../../../../../src'
import * as src from '../../../../../../src/index'
import { Outline } from '../../../../../../src/space'
import { substripe } from '../../../../src/components/substripe'
import * as space from '../../../../src/space/index'

describe('substripe', () => {
	const tileOrigin = to.Coordinate([ 11, 17 ])
	const tileSize = to.Unit(13)
	const shapeColorIndex = to.ShapeColorIndex(1)
	const substripeIndex = 5
	const substripeCount = 17
	const shapeColorCount = 4

	const outline: Outline = []
	const orientedOutline: Outline = []

	beforeEach(() => {
		spyOn(space, 'substripeOutline').and.returnValue(outline)
		spyOn(space, 'orientSubstripeOutline').and.returnValue(orientedOutline)
		spyOn(src, 'solid')

		substripe({ tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, shapeColorCount })
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
			shapeColorCount,
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
