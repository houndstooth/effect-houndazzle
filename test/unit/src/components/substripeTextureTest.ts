import * as to from '../../../../../../src/utilities/to'
import * as substripe from '../../../../src/components/substripe'
import { substripeTexture } from '../../../../src/components/substripeTexture'
import CallInfo = jasmine.CallInfo

describe('substripe texture', () => {
	const shapeColorCount = 3
	const tileOrigin = to.Coordinate([ 11, 17 ])
	const tileSize = to.Unit(13)
	const shapeColorIndex = to.ShapeColorIndex(1)

	let substripeCalls: CallInfo[]
	beforeEach(() => {
		const substripeSpy = spyOn(substripe, 'substripe')

		substripeTexture({ shapeColorCount, tileOrigin, tileSize, shapeColorIndex })

		substripeCalls = substripeSpy.calls.all()
	})

	it('calls substripe the minimum number of times to cover the entire tile', () => {
		expect(substripeCalls.length).toBe(32)
	})

	it('gets the substripe outline with the correct arguments', () => {
		substripeCalls.forEach((call, callIndex) => {
			expect(call.args[0].tileOrigin).toBe(tileOrigin)
			expect(call.args[0].tileSize).toBe(tileSize)
			expect(call.args[0].shapeColorIndex).toBe(shapeColorIndex)
			expect(call.args[0].substripeIndex).toBe(callIndex)
			expect(call.args[0].substripeCount).toBe(32)
			expect(call.args[0].shapeColorCount).toBe(3)
		})
	})
})
