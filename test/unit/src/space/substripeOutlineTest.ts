import substripeOutline from '../../../../src/space/substripeOutline'
import Outline from '../../../../../../src/space/types/Outline'
import Coordinate from '../../../../../../src/space/types/Coordinate'

describe('substripe outline', () => {
	it('calculates the outline of a substripe', () => {
		const tileOrigin = [ 11 as any, 17 as any ] as Coordinate
		const tileSize = 13 as any
		const substripeIndex = 1
		const substripeCount = 7

		const expectedOutline = [
			[ 11 - 13 / 2 as any, 17 - 13 / 2 + 13 / 7 * 2  as any ],
			[ 11 + 13 + 13 / 2 as any, 17 - 13 / 2 + 13 / 7 * 2  as any ],
			[ 11 + 13 + 13 / 2 as any, 17 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  as any ],
			[ 11 - 13 / 2 as any, 17 - 13 / 2 + 13 / 7 * 2 + 13 / 7 * 2  as any ],
		] as Outline

		const outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })

		expect(outline).toEqual(expectedOutline)
	})
})
