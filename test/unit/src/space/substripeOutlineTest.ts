import { to } from '../../../../../../src'
import { Unit } from '../../../../../../src/components/types'
import { Coordinate, Outline } from '../../../../../../src/space/types'
import { substripeOutline } from '../../../../src/space/substripeOutline'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		const tileOrigin: Coordinate = to.Coordinate([ 11, 17 ])
		const tileSize: Unit = to.Unit(13)
		const substripeIndex: number = 1
		const substripeCount: number = 7

		const expectedOutline: Outline = to.Outline([
			[ 11 - 13 / 2, 17 - 13 / 2 + 13 / 7 * 2  ],
			[ 11 + 13 + 13 / 2, 17 - 13 / 2 + 13 / 7 * 2  ],
			[ 11 + 13 + 13 / 2, 17 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
			[ 11 - 13 / 2, 17 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  ],
		])

		const outline: Outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })

		expect(outline).toEqual(expectedOutline)
	})
})
