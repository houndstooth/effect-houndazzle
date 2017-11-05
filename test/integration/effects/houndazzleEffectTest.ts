import { executeSelectedHoundstoothEffects, state, to } from '../../../../../src'
import { Address, Unit } from '../../../../../src/components/types'
import { Coordinate } from '../../../../../src/space/types'
import { Effect } from '../../../../../src/store/types'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { houndazzleEffect } from '../../../effects/houndazzleEffect'
import { calculateAreaOrigin } from '../helpers/calculateAreaOrigin'
import { expectSection } from '../helpers/sectionExpections'
import { HoundazzleSectionExpectation } from '../helpers/types'

describe('houndazzle effect', () => {
	// tslint:disable-next-line:max-line-length
	it('does houndstooth w/ horizontal against vertical striped textures, not simply black against white', async (done: DoneFn) => {
		state.selectedHoundstoothEffects = [ houndazzleEffect ]
		const tileSize: Unit = to.Unit(200)
		const houndstoothOverrides: Effect = {
			basePattern: {
				gridSettings: {
					tileResolution: 4,
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

		await executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const partA: HoundazzleSectionExpectation[][] = [
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
		]

		const partB: HoundazzleSectionExpectation[][] = [
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
		]
		const topLeftTile: HoundazzleSectionExpectation[][] = partA.concat(partB)

		// tslint:disable-next-line:no-unsafe-any
		const alteratingRow: HoundazzleSectionExpectation[] = [].concat
			.apply([], Array(8).fill([ [ 'solid', 'white' ], [ 'solid', 'black' ] ]))

		const topRightTile: HoundazzleSectionExpectation[][] = Array(16).fill(alteratingRow)

		const blackRow: HoundazzleSectionExpectation[] = Array(16).fill([ 'solid', 'black' ])
		const whiteRow: HoundazzleSectionExpectation[] = Array(16).fill([ 'solid', 'white' ])

		// tslint:disable-next-line:no-unsafe-any
		const bottomLeftTile: HoundazzleSectionExpectation[][] = [].concat
			.apply([], Array(8).fill([ blackRow, whiteRow ]))

		const bottomRightTile: HoundazzleSectionExpectation[][] = partB.concat(partA)

		const expectations: Array<[ HoundazzleSectionExpectation[][], Address ]> = [
			[ topLeftTile, to.Address([ 0, 0 ]) ],
			[ topRightTile, to.Address([ 1, 0 ]) ],
			[ bottomLeftTile, to.Address([ 0, 1 ]) ],
			[ bottomRightTile, to.Address([ 1, 1 ]) ],
		]
		expectations.forEach(([ expectTile, gridAddress ]: [ HoundazzleSectionExpectation[][], Address ]) => {
			expectTile.forEach((expectedSectionRows: HoundazzleSectionExpectation[], row: number) => {
				expectedSectionRows.forEach((expectedSection: HoundazzleSectionExpectation, col: number) => {
					const areaOrigin: Coordinate = calculateAreaOrigin({
						gridAddress,
						sectionAddress: to.Address([ col, row ]),
						sectionResolution: 16,
						tileSize,
					})

					expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
				})
			})
		})

		done()
	})
})
