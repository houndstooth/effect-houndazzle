import { to } from '../../../../../../src'
import { substripeOutline } from '../../../../src/space/substripeOutline'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		const tileOrigin = to.Coordinate([ 11, 17 ])
		const tileSize = to.Unit(13)
		const substripeIndex = 1
		const substripeCount = 7

		const expectedOutline = to.Outline([
			[ 11 - 13 / 2, 17 - 13 / 2 + 13 / 7 * 2  ],
			[ 11 + 13 + 13 / 2, 17 - 13 / 2 + 13 / 7 * 2  ],
			[ 11 + 13 + 13 / 2, 17 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
			[ 11 - 13 / 2, 17 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
		])

		const outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })

		expect(outline).toEqual(expectedOutline)
	})
})
