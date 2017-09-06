import substripeTexture from '../../../src/textures/substripeTexture'

describe('substripe texture', () => {
	const context = {}
	const tileColorIndices = [ 1, 0, 2 ]
	const tileOrigin = [ 11, 17 ]
	const tileSize = 13
	const shapeColorIndex = 1

	let substripeCalls
	beforeEach(() => {
		const substripeSpy = jasmine.createSpy()
		substripeTexture.__Rewire__('substripe', substripeSpy)

		substripeTexture({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex })

		substripeCalls = substripeSpy.calls.all()
	})

	it('calls substripe the minimum number of times to cover the entire tile', () => {
		expect(substripeCalls.length).toBe(32)
	})

	it('gets the substripe outline with the tile origin, tile size, substripe index, substripe count, colors count, and shape color index', () => {
		substripeCalls.forEach((call, callIndex) => {
			expect(call.args[0].context).toBe(context)
			expect(call.args[0].tileOrigin).toBe(tileOrigin)
			expect(call.args[0].tileSize).toBe(tileSize)
			expect(call.args[0].shapeColorIndex).toBe(shapeColorIndex)
			expect(call.args[0].substripeIndex).toBe(callIndex)
			expect(call.args[0].substripeCount).toBe(32)
			expect(call.args[0].colorsCount).toBe(3)
		})
	})
})
