import render from '../../shared/render/render'
import { COLOR_A, COLOR_B } from '../../shared/common/customize'

export default ({direction, subtripeWidth}) => {
    const patternCanvas = document.querySelector('.pattern-canvas')
    patternCanvas.width = subtripeWidth * 2
    patternCanvas.height = subtripeWidth * 2
    const patternCtx = patternCanvas.getContext('2d')

    let colorACoordinates
    let colorBCoordinates
    if (direction == 'VERTICAL') {
        colorACoordinates = [
            [
                0,
                0
            ],
            [
                subtripeWidth,
                0
            ],
            [
                subtripeWidth,
                subtripeWidth * 2
            ],
            [
                0,
                subtripeWidth * 2
            ]
        ]
        colorBCoordinates = [
            [
                subtripeWidth,
                0
            ],
            [
                subtripeWidth * 2,
                0
            ],
            [
                subtripeWidth * 2,
                subtripeWidth * 2
            ],
            [
                subtripeWidth,
                subtripeWidth * 2
            ]
        ]
    } else if (direction == 'HORIZONTAL') {
        colorACoordinates = [
            [
                0,
                0
            ],
            [
                0,
                subtripeWidth
            ],
            [
                subtripeWidth * 2,
                subtripeWidth
            ],
            [
                subtripeWidth * 2,
                0
            ]
        ]
        colorBCoordinates = [
            [
                0,
                subtripeWidth
            ],
            [
                0,
                subtripeWidth * 2
            ],
            [
                subtripeWidth * 2,
                subtripeWidth * 2
            ],
            [
                subtripeWidth * 2,
                subtripeWidth
            ]
        ]
    }

    render({ color: COLOR_A, coordinates: colorACoordinates, customContext: patternCtx})
    render({ color: COLOR_B, coordinates: colorBCoordinates, customContext: patternCtx})

    return patternCanvas
}