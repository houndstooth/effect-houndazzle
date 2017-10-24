import { executeSelectedHoundstoothEffects, state, to } from '../../../../../src'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { houndazzleEffect } from '../../../effects/houndazzleEffect'
import { calculateAreaOrigin } from '../helpers/calculateAreaOrigin'
import { expectSection } from '../helpers/sectionExpections'
import { HoundazzleSectionExpectation } from '../helpers/types'

describe('houndazzle effect', () => {
	it('does houndstooth w/ horizontal against vertical striped textures, not simply black against white', () => {
		state.selectedHoundstoothEffects = [ houndazzleEffect ]
		const tileSize = to.Unit(200)
		const houndstoothOverrides = {
			basePattern: {
				gridSettings: {
					gridSize: 4,
				},
				tileSettings: {
					tileSize,
				},
				viewSettings: {
					canvasSize: to.Px(800),
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const partA = [
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
		] as HoundazzleSectionExpectation[][]

		const partB = [
			[
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
			],
			[
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
			],
			[
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
			],
			[
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solidButTestMinorToAvoidSeam', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solidButTestMinorToAvoidSeam', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
			],
		] as HoundazzleSectionExpectation[][]
		const topLeftTile = partA.concat(partB)

		const alteratingRow = [
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
		]
		const topRightTile = [
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
		] as HoundazzleSectionExpectation[][]

		const blackRow = [
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
		]
		const whiteRow = [
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
		]
		const bottomLeftTile = [
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
		] as HoundazzleSectionExpectation[][]

		const bottomRightTile = partB.concat(partA)

		topLeftTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: to.Address([ 0, 0 ]),
					sectionAddress: to.Address([ col, row ]),
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		topRightTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: to.Address([ 1, 0 ]),
					sectionAddress: to.Address([ col, row ]),
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		bottomLeftTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: to.Address([ 0, 1 ]),
					sectionAddress: to.Address([ col, row ]),
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		bottomRightTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: to.Address([ 1, 1 ]),
					sectionAddress: to.Address([ col, row ]),
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})
	})
})
