import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import {
	Diagonal,
	ExpectDiagonalDividedSection,
	ExpectSolidSection,
} from '../../../../../test/integration/helpers/types'
import { HoundazzleExpectSection, HoundazzleFill } from './types'
import { Address } from '../../../../../src'

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
		areaSize: areaSize as any / 16 as any,
		sectionResolution: 1,
		sectionAddress: [ 0, 0 ] as Address,
		color,
	})).toBe(true)
}

const expectMinorDiagonalDividedSection: ExpectDiagonalDividedSection = ({ areaOrigin, areaSize, colors }) => {
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize: areaSize as any / 16 as any,
		sectionResolution: 2,
		sectionAddress: [ 0, 0 ] as Address,
		color: colors[ 0 ],
	})).toBe(true)
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize: areaSize as any / 16 as any,
		sectionResolution: 2,
		sectionAddress: [ 1, 1 ] as Address,
		color: colors[ 1 ],
	})).toBe(true)
}

export {
	expectSection,
}
