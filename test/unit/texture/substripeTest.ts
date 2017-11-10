import * as src from '../../../../../src'
import { ShapeColorIndex } from '../../../../../src/pattern/color/types'
import { Unit } from '../../../../../src/pattern/grid/types'
import { Outline } from '../../../../../src/pattern/stripe'
import * as to from '../../../../../src/to'
import * as orientSubstripeOutline from '../../../pattern/texture/orientSubstripeOutline'
import { substripe } from '../../../pattern/texture/substripe'
import * as substripeOutline from '../../../pattern/texture/substripeOutline'

describe('substripe', () => {
	const tileSize: Unit = to.Unit(13)
	const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(1)
	const substripeIndex: number = 5
	const substripeCount: number = 17

	const outline: Outline = []
	const orientedOutline: Outline = []

	beforeEach(() => {
		spyOn(substripeOutline, 'substripeOutline').and.returnValue(outline)
		spyOn(orientSubstripeOutline, 'orientSubstripeOutline').and.returnValue(orientedOutline)
		spyOn(src, 'solid')

		substripe({ tileSize, shapeColorIndex, substripeIndex, substripeCount })
	})

	it('gets the substripe outline', () => {
		expect(substripeOutline.substripeOutline).toHaveBeenCalledWith({
			substripeCount,
			substripeIndex,
			tileSize,
		})
	})

	it('orients the outline', () => {
		expect(orientSubstripeOutline.orientSubstripeOutline).toHaveBeenCalledWith({
			outline,
			shapeColorIndex,
		})
	})

	it('sends the result to be rendered as a solid filled path', () => {
		expect(src.solid).toHaveBeenCalledWith({
			outline: orientedOutline,
			shapeColorIndex: substripeIndex,
		})
	})
})
