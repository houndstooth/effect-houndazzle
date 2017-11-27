import { Outline, setSetting, to, Unit } from '../../../../../src'
import { substripeOutline } from '../../../pattern'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		setSetting.default('tileResolution', 13)
		const tileSize: Unit = to.Unit(1)
		const substripeIndex: number = 1
		const substripeCount: number = 7

		const expectedOutline: Outline = to.Outline([
			[ 0 - 13 / 2, 0 - 13 / 2 + 13 / 7 * 2  ],
			[ 0 + 13 + 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 ],
			[ 0 + 13 + 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2 ],
			[ 0 - 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
		])

		const outline: Outline = substripeOutline.default({ tileSize, substripeIndex, substripeCount })

		expect(outline).toEqual(expectedOutline)
	})
})
