// tslint:disable:no-unsafe-any

import * as src from '../../../../../../src'
import { ShapeColorIndex } from '../../../../../../src/components/types'
import { Coordinate, Outline } from '../../../../../../src/space/types'
import { setSetting } from '../../../../../../src/store/setSetting'
import * as to from '../../../../../../src/utilities/to'
import Spy = jasmine.Spy
import { isCloseTo } from '../../../../../../test/helpers/isCloseTo'
import { orientSubstripeOutline } from '../../../../src/space/orientSubstripeOutline'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const rotatedCoordinate: Coordinate = to.Coordinate([])
		const rotateCoordinateSpy: Spy = spyOn(src, 'rotateCoordinate').and.returnValue(rotatedCoordinate)

		setSetting('tileResolution', 3)
		setSetting('tileSize', to.Unit(5))

		const coordinate: Coordinate = to.Coordinate([])

		setSetting('colorSet', to.ColorSet([ { a: 0 }, { a: 0 } ]))
		const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(7)
		const outline: Outline = to.Outline([ coordinate ])

		const actualOutline: Outline = orientSubstripeOutline({
			outline,
			shapeColorIndex,
		})

		expect(rotateCoordinateSpy.calls.all()[ 0 ].args[ 0 ].coordinate).toEqual(coordinate)
		expect(rotateCoordinateSpy.calls.all()[ 0 ].args[ 0 ].fixedCoordinate).toEqual(to.Coordinate([ 7.5, 7.5 ]))
		expect(isCloseTo(rotateCoordinateSpy.calls.all()[ 0 ].args[ 0 ].rotation, 11)).toBe(true)
		expect(actualOutline[ 0 ]).toBe(rotatedCoordinate)
	})
})
