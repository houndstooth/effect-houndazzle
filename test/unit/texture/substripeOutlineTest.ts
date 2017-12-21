import { Outline, patternState, to, Unit } from '../../../../../src/indexForTest'
import { substripeOutline, SubstripeOutlineParams } from '../../../pattern'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		const subject: (_: SubstripeOutlineParams) => Outline = substripeOutline.default
		patternState.gridSettings.tileResolution = 13
		const tileSize: Unit = to.Unit(1)
		const substripeIndex: number = 1
		const substripeCount: number = 7

		const expectedOutline: Outline = to.Outline([
			[ 0 - 13 / 2, 0 - 13 / 2 + 13 / 7 * 2  ],
			[ 0 + 13 + 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 ],
			[ 0 + 13 + 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2 ],
			[ 0 - 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
		])

		const outline: Outline = subject({ tileSize, substripeIndex, substripeCount })

		expect(outline).toEqual(expectedOutline)
	})
})
