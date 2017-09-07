import substripe from '../../../src/components/substripe'

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
		substripeOutlineSpy = jasmine.createSpy().and.returnValue(outline)
		orientSubstripeOutlineSpy = jasmine.createSpy().and.returnValue(orientedOutline)
		solidSpy = jasmine.createSpy()

		substripe.__Rewire__('substripeOutline', substripeOutlineSpy)
		substripe.__Rewire__('orientSubstripeOutline', orientSubstripeOutlineSpy)
		substripe.__Rewire__('solid', solidSpy)

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
