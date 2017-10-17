import { Address, CanvasSize, executeSelectedHoundstoothEffects, state } from '../../../../../src'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { Diagonal } from '../../../../../test/integration/helpers/types'
import houndazzleEffect from '../../../effects/houndazzleEffect'
import calculateAreaOrigin from '../helpers/calculateAreaOrigin'
import { expectSection } from '../helpers/sectionExpections'
import { HoundazzleFill, HoundazzleSectionExpectation } from '../helpers/types'

describe('houndazzle effect', () => {
	it('does houndstooth w/ horizontal against vertical striped textures, not simply black against white', () => {
		state.selectedHoundstoothEffects = [ houndazzleEffect ]
		const tileSize = 200 as any
		const houndstoothOverrides = {
			basePattern: {
				gridSettings: {
					gridSize: 4,
				},
				tileSettings: {
					tileSizeSetting: tileSize,
				},
				viewSettings: {
					canvasSize: 800 as CanvasSize,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const partA = [
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
		] as HoundazzleSectionExpectation[][]

		const partB = [
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
		] as HoundazzleSectionExpectation[][]
		const topLeftTile = partA.concat(partB)

		const alteratingRow = [
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
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
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
		]
		const whiteRow = [
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
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
					gridAddress: [ 0, 0 ] as Address,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		topRightTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 1, 0 ] as Address,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		bottomLeftTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 0, 1 ] as Address,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		bottomRightTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 1, 1 ] as Address,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
					tileSize,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})
	})
})
