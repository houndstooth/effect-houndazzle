import { setSetting, ShapeColorIndex, to, Unit } from '../../../../../src'
import Spy = jasmine.Spy
import CallInfo = jasmine.CallInfo
import { substripe, SubstripeParams, substripeTexture } from '../../../pattern'

describe('substripe texture', () => {
	const tileSize: Unit = to.Unit(13)
	const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(1)

	let substripeCalls: CallInfo[]
	beforeEach(() => {
		setSetting.main('tileResolution', 2)

		const substripeSpy: Spy = spyOn(substripe, 'main')

		substripeTexture.main({ tileSize, shapeColorIndex })

		substripeCalls = substripeSpy.calls.all()
	})

	// tslint:disable-next-line:max-line-length
	it('calls substripe the minimum number of times that is a round number multiple of the count you actually see in the tile, in order to safely cover the entire grid, no matter the orientation it will receive', () => {
		expect(substripeCalls.length).toBe(64)
	})

	it('gets the substripe outline with the correct arguments', () => {
		substripeCalls.forEach((call: CallInfo, callIndex: number): void => {
			const calls: SubstripeParams[] = call.args

			expect(calls[0].tileSize).toBe(tileSize)
			expect(calls[0].shapeColorIndex).toBe(shapeColorIndex)
			expect(calls[0].substripeIndex).toBe(callIndex)
			expect(calls[0].substripeCount).toBe(64)
		})
	})
})
