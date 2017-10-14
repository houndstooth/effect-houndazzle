import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { BLACK, TRANSPARENT } from '../../../../../src/constants'
import {
	Diagonal,
	ExpectDiagonalDividedSection,
	ExpectSolidSection,
} from '../../../../../test/integration/helpers/types'
import { HoundazzleExpectSection, HoundazzleFill } from './types'

const expectSection: HoundazzleExpectSection = ({ expectedSection, areaOrigin, areaSize }) => {
	const diagonalType = expectedSection[ 0 ]
	const sectionDefiningColor = expectedSection[ 1 ] === HoundazzleFill.Black ? BLACK : TRANSPARENT

	if (diagonalType === Diagonal.Solid) {
		expectSolidSection({ areaOrigin, areaSize, color: sectionDefiningColor })
	}
	else if (diagonalType === Diagonal.SolidButTestMinorToAvoidSeam) {
		expectMinorDiagonalDividedSection({
			areaOrigin,
			areaSize,
			colors: [ sectionDefiningColor, sectionDefiningColor ],
		})
	}
	else if (diagonalType === Diagonal.Minor) {
		const otherColor = expectedSection[ 1 ] === HoundazzleFill.Black ? TRANSPARENT : BLACK
		expectMinorDiagonalDividedSection({ areaOrigin, areaSize, colors: [ sectionDefiningColor, otherColor ] })
	}
}

const expectSolidSection: ExpectSolidSection = ({ areaOrigin, areaSize, color }) => {
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize: areaSize / 16,
		sectionResolution: 1,
		sectionAddress: [ 0, 0 ],
		color,
	})).toBe(true)
}

const expectMinorDiagonalDividedSection: ExpectDiagonalDividedSection = ({ areaOrigin, areaSize, colors }) => {
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize: areaSize / 16,
		sectionResolution: 2,
		sectionAddress: [ 0, 0 ],
		color: colors[ 0 ],
	})).toBe(true)
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize: areaSize / 16,
		sectionResolution: 2,
		sectionAddress: [ 1, 1 ],
		color: colors[ 1 ],
	})).toBe(true)
}

export {
	expectSection,
}
