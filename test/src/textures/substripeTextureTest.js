import substripeTexture from '../../../src/textures/substripeTexture'
import store from '../../../../../store'

describe('substripe texture', () => {
	const set = [ 'colorOne', 'colorTwo', 'colorThree' ]

	const context = {}
	const tileColorIndices = [ 1, 0, 2 ]
	const tileOrigin = [ 11, 17 ]
	const tileSize = 13
	const shapeColorIndex = 1
	const colorsCount = 4

	let renderCalls
	let substripeOutlineCalls

	let outlineCallCounter = 0

	let substripeOutlineSpy

	const minimumNecessarySubstripeCountForFullTileCoverage = 32

	beforeEach(() => {
		store.mainHoundstooth.basePattern.colorSettings = { set }

		const renderSpy = jasmine.createSpy()
		substripeTexture.__Rewire__('render', renderSpy)

		substripeOutlineSpy = jasmine.createSpy().and.callFake(() => outlineCallCounter++)
		substripeTexture.__Rewire__('substripeOutline', substripeOutlineSpy)

		substripeTexture({ context, tileColorIndices, tileOrigin, tileSize, colorsCount, shapeColorIndex })

		renderCalls = renderSpy.calls.all()
		substripeOutlineCalls = substripeOutlineSpy.calls.all()
	})

	it('calls render and outline once for each substripe', () => {
		expect(renderCalls.length).toBe(minimumNecessarySubstripeCountForFullTileCoverage)
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

	it('calls render with each substripe outline', () => {
		expect(renderCalls.every((renderCall, callIndex) => {
			return renderCall.args[0].outline === callIndex
		}))
	})

	it('calls render with the context', () => {
		expect(renderCalls.every(renderCall => renderCall.args[0].context === context))
	})

	it('cycles through the tile colors, choosing them by the substripe index', () => {
		expect(renderCalls[0].args[0].shapeColor).toBe('colorOne')
		expect(renderCalls[1].args[0].shapeColor).toBe('colorTwo')
		expect(renderCalls[2].args[0].shapeColor).toBe('colorThree')
		expect(renderCalls[3].args[0].shapeColor).toBe('colorOne')
		expect(renderCalls[4].args[0].shapeColor).toBe('colorTwo')
		expect(renderCalls[5].args[0].shapeColor).toBe('colorThree')
		expect(renderCalls[6].args[0].shapeColor).toBe('colorOne')
	})
})
