import { Outline, ShapeColorIndex, solid, to, Unit } from '../../../../../src/indexForTest'
import { orientSubstripeOutline, substripe, substripeOutline, SubstripeParams } from '../../../pattern'

describe('substripe', () => {
	let tileSize: Unit
	let shapeColorIndex: ShapeColorIndex
	const substripeIndex: number = 5
	const substripeCount: number = 17

	const outline: Outline = []
	const orientedOutline: Outline = []

	let subject: (_: SubstripeParams) => void
	beforeEach(() => {
		tileSize = to.Unit(13)
		shapeColorIndex = to.ShapeColorIndex(1)
		subject = substripe.default
		spyOn(substripeOutline, 'default').and.returnValue(outline)
		spyOn(orientSubstripeOutline, 'default').and.returnValue(orientedOutline)
		spyOn(solid, 'default')

		subject({ tileSize, shapeColorIndex, substripeIndex, substripeCount })
	})

	it('gets the substripe outline', () => {
		expect(substripeOutline.default).toHaveBeenCalledWith({
			substripeCount,
			substripeIndex,
			tileSize,
		})
	})

	it('orients the outline', () => {
		expect(orientSubstripeOutline.default).toHaveBeenCalledWith({
			outline,
			shapeColorIndex,
		})
	})

	it('sends the result to be rendered as a solid filled path', () => {
		expect(solid.default).toHaveBeenCalledWith({
			outline: orientedOutline,
		// @ts-ignore
			shapeColorIndex: substripeIndex,
		})
	})
})
