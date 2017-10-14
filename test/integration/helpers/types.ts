import { Diagonal } from '../../../../../test/integration/helpers/types'
import { Coordinate } from '../../../../../src/space'

enum HoundazzleFill {
	Black = 'black',
	White = 'white',
}

type HoundazzleSectionExpectation = [ Diagonal, HoundazzleFill ]

type HoundazzleExpectSection = {
	({}: {
		expectedSection: [ Diagonal, HoundazzleFill ],
		areaSize: number,
		areaOrigin: Coordinate,
	}): void,
}

export {
	HoundazzleFill,
	HoundazzleSectionExpectation,
	HoundazzleExpectSection,
}
