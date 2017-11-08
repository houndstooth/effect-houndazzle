import { setSetting } from '../../../../../src/app/store/setSetting'
import { Unit } from '../../../../../src/pattern/grid/types'
import { Outline } from '../../../../../src/pattern/stripe/types'
import * as to from '../../../../../src/to'
import { substripeOutline } from '../../../pattern/texture/substripeOutline'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		setSetting('tileResolution', 13)
		const tileSize: Unit = to.Unit(1)
		const substripeIndex: number = 1
		const substripeCount: number = 7

		const expectedOutline: Outline = to.Outline([
			[ 0 - 13 / 2, 0 - 13 / 2 + 13 / 7 * 2  ],
			[ 0 + 13 + 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 ],
			[ 0 + 13 + 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2 ],
			[ 0 - 13 / 2, 0 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
		])

		const outline: Outline = substripeOutline({ tileSize, substripeIndex, substripeCount })

		expect(outline).toEqual(expectedOutline)
	})
})
