import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import * as from from '../../../../../src/from'
import * as to from '../../../../../src/to'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import {
	Diagonal,
	ExpectDiagonalDividedSection,
	ExpectSolidSection,
} from '../../../../../test/integration/helpers/types'
import { HoundazzleExpectSection, HoundazzleFill } from './types'

const expectByDiagonal = {
	[Diagonal.Solid]: ({ areaOrigin, areaSize, sectionDefiningColor }) => {
		expectSolidSection({ areaOrigin, areaSize, color: sectionDefiningColor })
	},
	[Diagonal.SolidButTestMinorToAvoidSeam]: ({ areaOrigin, areaSize, sectionDefiningColor }) => {
		expectMinorDiagonalDividedSection({
			areaOrigin,
			areaSize,
			colors: [ sectionDefiningColor, sectionDefiningColor ],
		})
	},
	[Diagonal.Minor]: ({ areaOrigin, areaSize, sectionDefiningColor, otherColor }) => {
		expectMinorDiagonalDividedSection({ areaOrigin, areaSize, colors: [ sectionDefiningColor, otherColor ] })
	},
}

const expectSection: HoundazzleExpectSection = ({ expectedSection, areaOrigin, areaSize }) => {
	const diagonalType = expectedSection[ 0 ]
	const sectionDefiningColor = expectedSection[ 1 ] === HoundazzleFill.Black ? BLACK : TRANSPARENT
	const otherColor = expectedSection[ 1 ] === HoundazzleFill.Black ? BLACK : TRANSPARENT
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
