import { BLACK, Color, from, to, TRANSPARENT } from '../../../../../src/indexForTest'
import { Diagonal, sectionCenterIsColor } from '../../../../../test'

import {
	DiagonalExpectation,
	HoundazzleExpectSectionParams,
	SolidExpectation,
} from './types'

const expectSection: (_: HoundazzleExpectSectionParams) => void =
	({ expectedSection, areaOrigin, areaSize }: HoundazzleExpectSectionParams): void => {
		const diagonalType: Diagonal = expectedSection[ 0 ]
		const sectionDefiningColor: Color = expectedSection[ 1 ] === 'black' ? BLACK : TRANSPARENT
		const otherColor: Color = expectedSection[ 1 ] === 'black' ? BLACK : TRANSPARENT

		if (diagonalType === 'solid') {
			expectSolidSection({ areaOrigin, areaSize, color: sectionDefiningColor })
		}
		else if (diagonalType === 'solidButTestMinorToAvoidSeam') {
			expectMinorDiagonalDividedSection({
				areaOrigin,
				areaSize,
				colors: [ sectionDefiningColor, sectionDefiningColor ],
			})
		}
		else { // If (diagonalType === 'solidButTestMinorToAvoidSeam')
			expectMinorDiagonalDividedSection({ areaOrigin, areaSize, colors: [ sectionDefiningColor, otherColor ] })
		}
	}

const expectSolidSection: (_: SolidExpectation) => void =
	({ areaOrigin, areaSize, color }: SolidExpectation): void => {
		expect(sectionCenterIsColor({
			areaOrigin,
			areaSize: to.Unit(from.Unit(areaSize) / 16),
			color,
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 1,
		})).toBe(true)
	}

const expectMinorDiagonalDividedSection: (_: DiagonalExpectation) => void =
	({ areaOrigin, areaSize, colors }: DiagonalExpectation): void => {
		expect(sectionCenterIsColor({
			areaOrigin,
			areaSize: to.Unit(from.Unit(areaSize) / 16),
			color: colors[ 0 ],
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 2,
		})).toBe(true)
		expect(sectionCenterIsColor({
			areaOrigin,
			areaSize: to.Unit(from.Unit(areaSize) / 16),
			color: colors[ 1 ],
			sectionAddress: to.Address([ 1, 1 ]),
			sectionResolution: 2,
		})).toBe(true)
	}

export default expectSection
