import { Unit } from '../../../../../src/components/types/Unit'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import { Color } from '../../../../../src/render/types/Color'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { ExpectDiagonalDividedSection, ExpectSolidSection } from '../../../../../test/integration/helpers/types'
import { HoundazzleExpectSection } from './types'

interface ExpectSolidParams { areaOrigin: Coordinate, areaSize: Unit, sectionDefiningColor: Color }
interface ExpectDiagonalParams extends ExpectSolidParams { otherColor: Color }

const expectByDiagonal: { [index: string]: any } = {
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

const expectSection: HoundazzleExpectSection = ({ expectedSection, areaOrigin, areaSize }) => {
	const diagonalType = expectedSection[ 0 ]
	const sectionDefiningColor = expectedSection[ 1 ] === 'black' ? BLACK : TRANSPARENT
	const otherColor = expectedSection[ 1 ] === 'black' ? BLACK : TRANSPARENT
	const args = { areaOrigin, areaSize, sectionDefiningColor, otherColor }
	expectByDiagonal[diagonalType](args)
}

const expectSolidSection: ExpectSolidSection = ({ areaOrigin, areaSize, color }) => {
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize: to.Unit(from.Unit(areaSize) / 16),
		color,
		sectionAddress: to.Address([ 0, 0 ]),
		sectionResolution: 1,
	})).toBe(true)
}

const expectMinorDiagonalDividedSection: ExpectDiagonalDividedSection = ({ areaOrigin, areaSize, colors }) => {
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
