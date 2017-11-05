import { ShapeColorIndex, Unit } from '../../../../../../src/components/types'
import CallInfo = jasmine.CallInfo
import { Coordinate } from '../../../../../../src/space/types'
import * as to from '../../../../../../src/utilities/to'
import * as substripe from '../../../../src/components/substripe'
import { substripeTexture } from '../../../../src/components/substripeTexture'
import Spy = jasmine.Spy
import { SubstripeParams } from '../../../../src/components/types'

describe('substripe texture', () => {
	const tileOrigin: Coordinate = to.Coordinate([ 11, 17 ])
	const tileSize: Unit = to.Unit(13)
	const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(1)

	let substripeCalls: CallInfo[]
	beforeEach(() => {
		const substripeSpy: Spy = spyOn(substripe, 'substripe')

		substripeTexture({ tileOrigin, tileSize, shapeColorIndex })

		substripeCalls = substripeSpy.calls.all()
	})

	it('calls substripe the minimum number of times to cover the entire tile', () => {
		expect(substripeCalls.length).toBe(32)
	})

	it('gets the substripe outline with the correct arguments', () => {
		substripeCalls.forEach((call: CallInfo, callIndex: number): void => {
			const calls: SubstripeParams[] = call.args

			expect(calls[0].tileOrigin).toBe(tileOrigin)
			expect(calls[0].tileSize).toBe(tileSize)
			expect(calls[0].shapeColorIndex).toBe(shapeColorIndex)
			expect(calls[0].substripeIndex).toBe(callIndex)
			expect(calls[0].substripeCount).toBe(32)
		})
	})
})
