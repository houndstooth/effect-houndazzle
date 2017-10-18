import { TileColorIndices } from '../../../../../../src/components/types/TileColorIndices'
import { Coordinate } from '../../../../../../src/space/types/Coordinate'
import * as components from '../../../../src/components/index'
import { substripeTexture } from '../../../../src/textures/substripeTexture'

describe('substripe texture', () => {
	const context = {}
	const tileColorIndices = [ 1, 0, 2 ] as TileColorIndices
	const tileOrigin = [ 11 as any, 17 as any ] as Coordinate
	const tileSize = 13 as any
	const shapeColorIndex = 1

	let substripeCalls
	beforeEach(() => {
		const substripeSpy = spyOn(components, 'substripe')

		substripeTexture({ context, tileColorIndices, tileOrigin, tileSize, shapeColorIndex })

		substripeCalls = substripeSpy.calls.all()
	})

	it('calls substripe the minimum number of times to cover the entire tile', () => {
		expect(substripeCalls.length).toBe(32)
	})

	it('gets the substripe outline with the correct arguments', () => {
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
