import { Unit } from '../../../../../src/components'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { Color } from '../../../../../src/render'
import { Coordinate } from '../../../../../src/space'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { Diagonal } from '../../../../../test/integration/helpers/types'
import { HoundazzleExpectSectionParams } from './types'

interface ExpectSolidParams {
	areaOrigin: Coordinate,
	areaSize: Unit,
	sectionDefiningColor: Color,
}

interface ExpectDiagonalParams extends ExpectSolidParams {
	otherColor: Color,
}

interface ExpectParams extends ExpectSolidParams {
	otherColor?: Color,
}

interface SolidExpectation {
	areaOrigin: Coordinate,
	areaSize: Unit,
	color: Color,
}

interface DiagonalExpectation {
	areaOrigin: Coordinate,
	areaSize: Unit,
	colors: Color[],
}

// tslint:disable-next-line:no-any
const expectByDiagonal: { [index: string]: (p: ExpectParams) => void } = {
	['solid']: ({ areaOrigin, areaSize, sectionDefiningColor }: ExpectSolidParams) => {
		expectSolidSection({ areaOrigin, areaSize, color: sectionDefiningColor })
	},
	['solidButTestMinorToAvoidSeam']: ({ areaOrigin, areaSize, sectionDefiningColor }: ExpectSolidParams) => {
		expectMinorDiagonalDividedSection({
			areaOrigin,
			areaSize,
			colors: [ sectionDefiningColor, sectionDefiningColor ],
		})
	},
	['minor']: ({ areaOrigin, areaSize, sectionDefiningColor, otherColor }: ExpectDiagonalParams) => {
		expectMinorDiagonalDividedSection({ areaOrigin, areaSize, colors: [ sectionDefiningColor, otherColor ] })
	},
}

const expectSection: (_: HoundazzleExpectSectionParams) => void =
	({ expectedSection, areaOrigin, areaSize }: HoundazzleExpectSectionParams): void => {
		const diagonalType: Diagonal = expectedSection[ 0 ]
		const sectionDefiningColor: Color = expectedSection[ 1 ] === 'black' ? BLACK : TRANSPARENT
		const otherColor: Color = expectedSection[ 1 ] === 'black' ? BLACK : TRANSPARENT
		const args: ExpectParams = { areaOrigin, areaSize, sectionDefiningColor, otherColor }
		expectByDiagonal[ diagonalType ](args)
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

export {
	expectSection,
}
