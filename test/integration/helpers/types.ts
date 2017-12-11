import { Address, Color, Coordinate, Unit } from '../../../../../src/indexForTest'
import { Diagonal } from '../../../../../test'

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
