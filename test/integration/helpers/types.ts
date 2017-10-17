import { Units } from '../../../../../src/components'
import { Coordinate } from '../../../../../src/space'
import { Diagonal } from '../../../../../test/integration/helpers/types'

enum HoundazzleFill {
	Black = 'black',
	White = 'white',
}

type HoundazzleSectionExpectation = [ Diagonal, HoundazzleFill ]

interface HoundazzleExpectSection {
	({}: {
		areaOrigin: Coordinate,
		areaSize: Units,
		expectedSection: [ Diagonal, HoundazzleFill ],
	}): void,
}

export {
	HoundazzleFill,
	HoundazzleSectionExpectation,
	HoundazzleExpectSection,
}
