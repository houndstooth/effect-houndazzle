import substripeTexture from '../../../src/textures/substripeTexture'

describe('substripe texture', () => {
	const context = {}
	const tileColorIndices = [ 1, 0, 2 ]
	const tileOrigin = [ 11, 17 ]
	const tileSize = 13
	const shapeColorIndex = 1
	const colorsCount = 4

	let solidCalls
	let substripeOutlineCalls

	let outlineCallCounter = 0

	let substripeOutlineSpy

	const minimumNecessarySubstripeCountForFullTileCoverage = 32

	beforeEach(() => {
		const solidSpy = jasmine.createSpy()
		substripeTexture.__Rewire__('solid', solidSpy)

		substripeOutlineSpy = jasmine.createSpy().and.callFake(() => outlineCallCounter++)
		substripeTexture.__Rewire__('substripeOutline', substripeOutlineSpy)

		substripeTexture({ context, tileColorIndices, tileOrigin, tileSize, colorsCount, shapeColorIndex })

		solidCalls = solidSpy.calls.all()
		substripeOutlineCalls = substripeOutlineSpy.calls.all()
	})

	it('calls solid and outline once for each substripe', () => {
		expect(solidCalls.length).toBe(minimumNecessarySubstripeCountForFullTileCoverage)
		expect(substripeOutlineCalls.length).toBe(minimumNecessarySubstripeCountForFullTileCoverage)
	})

	it('gets the substripe outline with the tile origin, tile size, substripe index, substripe count, colors count, and shape color index', () => {
		expect(substripeOutlineCalls.every((substripeOutlineCall, callIndex) => {
			return substripeOutlineCall.args[0].tileOrigin === tileOrigin &&
				substripeOutlineCall.args[0].tileSize === tileSize &&
				substripeOutlineCall.args[0].substripeIndex === callIndex &&
				substripeOutlineCall.args[0].substripeCount === minimumNecessarySubstripeCountForFullTileCoverage &&
				substripeOutlineCall.args[0].colorsCount === colorsCount &&
				substripeOutlineCall.args[0].shapeColorIndex === shapeColorIndex
		}))
	})

	it('calls solid with each substripe outline', () => {
		expect(solidCalls.every((call, callIndex) => {
			return call.args[0].outline === callIndex
		}))
	})

	it('calls solid with the context', () => {
		expect(solidCalls.every(call => call.args[0].context === context))
	})

	it('cycles through the tile colors, choosing them by the substripe index', () => {
		expect(solidCalls.every((call, callIndex) => {
			return call.args[0].shapeColorIndex === callIndex
		}))
	})
})
