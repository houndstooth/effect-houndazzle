import render from '../../shared/render/render'
import ctx from '../../shared/render/ctx'
import { UNIT, COLOR_A, COLOR_B } from '../../shared/common/customize'
import scaleOrigin from '../../shared/utilities/scaleOrigin'
import iterator from '../../shared/utilities/iterator'
import createStripesPattern from '../utilities/createStripesPattern'

export default ({ origin, size, originSubstripeDirection, scaleFromCenter, substripeCount }) => {
    origin = scaleOrigin({ origin, scaleFromCenter })
    const sizedUnit = UNIT * size

    const topLeftTriangleCoordinates = [
        [
            origin[ 0 ],
            origin[ 1 ]
        ],
        [
            origin[ 0 ] + sizedUnit / 2,
            origin[ 1 ]
        ],
        [
            origin[ 0 ],
            origin[ 1 ] + sizedUnit / 2
        ]
    ]

    const topLeftTrapezoidCoordinates = [
        [
            origin[ 0 ] + sizedUnit,
            origin[ 1 ]
        ],
        [
            origin[ 0 ],
            origin[ 1 ] + sizedUnit
        ],
        [
            origin[ 0 ],
            origin[ 1 ] + sizedUnit / 2
        ],
        [
            origin[ 0 ] + sizedUnit / 2,
            origin[ 1 ]
        ]
    ]

    const bottomRightTrapezoidCoordinates = [
        [
            origin[ 0 ] + sizedUnit,
            origin[ 1 ]
        ],
        [
            origin[ 0 ] + sizedUnit,
            origin[ 1 ] + sizedUnit / 2
        ],
        [
            origin[ 0 ] + sizedUnit / 2,
            origin[ 1 ] + sizedUnit
        ],
        [
            origin[ 0 ],
            origin[ 1 ] + sizedUnit
        ]
    ]

    const bottomRightTriangleCoordinates = [
        [
            origin[ 0 ] + sizedUnit,
            origin[ 1 ] + sizedUnit
        ],
        [
            origin[ 0 ] + sizedUnit / 2,
            origin[ 1 ] + sizedUnit
        ],
        [
            origin[ 0 ] + sizedUnit,
            origin[ 1 ] + sizedUnit / 2
        ]
    ]

    const subtripeWidth = sizedUnit / substripeCount
    const originColorPatternCanvas = createStripesPattern({direction: originSubstripeDirection, subtripeWidth})
    const originColor = ctx.createPattern(originColorPatternCanvas, 'repeat')
    render({ color: originColor, coordinates: topLeftTriangleCoordinates })
    render({ color: originColor, coordinates: bottomRightTrapezoidCoordinates })

    const otherSubstripeDirection = originSubstripeDirection == 'VERTICAL' ? 'HORIZONTAL' : 'VERTICAL'
    const otherColorPatternCanvas = createStripesPattern({direction: otherSubstripeDirection, subtripeWidth})
    const otherColor = ctx.createPattern(otherColorPatternCanvas, 'repeat')
    render({ color: otherColor, coordinates: topLeftTrapezoidCoordinates })
    render({ color: otherColor, coordinates: bottomRightTriangleCoordinates })
}