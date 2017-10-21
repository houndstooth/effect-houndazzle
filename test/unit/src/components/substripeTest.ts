import { to } from '../../../../../../src'
import * as src from '../../../../../../src/index'
import { substripe } from '../../../../src/components/substripe'
import * as space from '../../../../src/space/index'

describe('substripe', () => {
	const context = {}
	const tileOrigin = to.Coordinate([ 11, 17 ])
	const tileSize = to.Unit(13)
	const shapeColorIndex = 1
	const substripeIndex = 5
	const substripeCount = 17
	const colorsCount = 4

	const outline = []
	const orientedOutline = []

	beforeEach(() => {
		spyOn(space, 'substripeOutline').and.returnValue(outline)
		spyOn(space, 'orientSubstripeOutline').and.returnValue(orientedOutline)
		spyOn(src, 'solid')

		substripe({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount })
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
			colorsCount,
			outline,
			shapeColorIndex,
			tileOrigin,
			tileSize,
		})
	})

	it('sends the result to be rendered as a solid filled path', () => {
		expect(src.solid).toHaveBeenCalledWith({
			context,
			outline: orientedOutline,
			shapeColorIndex: substripeIndex,
		})
	})
})
