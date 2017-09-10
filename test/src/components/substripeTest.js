import substripe from '../../../src/components/substripe'
import outlines from '../../../src/outlines'
import src from '../../../../../src'

describe('substripe', () => {
	const context = {}
	const tileOrigin = [ 11, 17 ]
	const tileSize = 13
	const shapeColorIndex = 1
	const substripeIndex = 5
	const substripeCount = 17
	const colorsCount = 4

	const outline = []
	const orientedOutline = []

	let substripeOutlineSpy
	let orientSubstripeOutlineSpy
	let solidSpy
	beforeEach(() => {
		substripeOutlineSpy = spyOn(outlines, 'substripeOutline').and.returnValue(outline)
		orientSubstripeOutlineSpy = spyOn(outlines, 'orientSubstripeOutline').and.returnValue(orientedOutline)
		solidSpy = spyOn(src, 'solid')

		substripe({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount })
	})

	it('gets the substripe outline', () => {
		expect(substripeOutlineSpy).toHaveBeenCalledWith({
			tileOrigin,
			tileSize,
			substripeIndex,
			substripeCount,
		})
	})

	it('orients the outline', () => {
		expect(orientSubstripeOutlineSpy).toHaveBeenCalledWith({
			colorsCount,
			shapeColorIndex,
			outline,
			tileOrigin,
			tileSize,
		})
	})

	it('sends the result to be rendered as a solid filled path', () => {
		expect(solidSpy).toHaveBeenCalledWith({
			context,
			outline: orientedOutline,
			shapeColorIndex: substripeIndex,
		})
	})
})
