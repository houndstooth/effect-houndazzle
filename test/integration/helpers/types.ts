import { Unit } from '../../../../../src/components'
import { Coordinate } from '../../../../../src/space'
import { Diagonal } from '../../../../../test/integration/helpers/types'

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
	HoundazzleSectionExpectation,
	HoundazzleExpectSectionParams,
}
