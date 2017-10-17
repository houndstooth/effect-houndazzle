import { Diagonal } from '../../../../../test/integration/helpers/types'
import { Coordinate } from '../../../../../src/space'
import { Units } from '../../../../../src/components'

enum HoundazzleFill {
	Black = 'black',
	White = 'white',
}

type HoundazzleSectionExpectation = [ Diagonal, HoundazzleFill ]

type HoundazzleExpectSection = {
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
