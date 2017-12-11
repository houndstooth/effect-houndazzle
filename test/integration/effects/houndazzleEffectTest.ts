import { Address, appState, Coordinate, Effect, executeSelectedEffects, to, Unit } from '../../../../../src/indexForTest'
import { houndazzleEffect } from '../../../effects'
import { calculateAreaOrigin, expectSection, HoundazzleSectionExpectation } from '../helpers'

describe('houndazzle effect', () => {
	// tslint:disable-next-line:max-line-length
	it('does houndstooth w/ horizontal against vertical striped textures, not simply black against white', async (done: DoneFn) => {
		appState.controls.selectedEffects = [ houndazzleEffect ]
		const tileSize: Unit = to.Unit(200)
		const overrides: Effect = {
			basePattern: {
				gridSettings: {
					tileResolution: 4,
				},
				tileSettings: {
					tileSize,
				},
			},
		}

		executeSelectedEffects.default({ overrides })

		setTimeout(() => {
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
		},         0)
	})
})
