import { ExecuteTextureParams, patternState, ShapeColorIndex, to, Unit } from '../../../../../src/indexForTest'
import Spy = jasmine.Spy
import CallInfo = jasmine.CallInfo
import { substripe, SubstripeParams, substripeTexture } from '../../../pattern'

describe('substripe texture', () => {
	let tileSize: Unit
	let shapeColorIndex: ShapeColorIndex
	let subject: (_: ExecuteTextureParams) => void
	let substripeCalls: CallInfo[]
	beforeEach(() => {
		subject = substripeTexture.default
		tileSize = to.Unit(13)
		shapeColorIndex = to.ShapeColorIndex(1)
		patternState.gridSettings.tileResolution = 2

		const substripeSpy: Spy = spyOn(substripe, 'default')

		subject({ tileSize, shapeColorIndex })

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
