import { Color } from '../../../../../src/pattern/color/types'
import { Address, Unit } from '../../../../../src/pattern/grid/types'
import { Coordinate } from '../../../../../src/pattern/stripe'
import { Diagonal } from '../../../../../test/integration/helpers/types'

interface AreaOriginParams {
	gridAddress: Address,
	sectionAddress: Address,
	sectionResolution: number,
	tileSize: Unit,
}

interface ExpectSolidParams {
	areaOrigin: Coordinate,
	areaSize: Unit,
	sectionDefiningColor: Color,
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

type HoundazzleFill =
	| 'black'
	| 'white'

type HoundazzleSectionExpectation = [ Diagonal, HoundazzleFill ]

interface HoundazzleExpectSectionParams {
	areaOrigin: Coordinate,
	areaSize: Unit,
	expectedSection: [ Diagonal, HoundazzleFill ],
}

export {
	AreaOriginParams,
	DiagonalExpectation,
	ExpectParams,
	ExpectSolidParams,
	HoundazzleSectionExpectation,
	HoundazzleExpectSectionParams,
	SolidExpectation,
}
