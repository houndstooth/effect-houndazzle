import { GRID_SIZE, COLOR_A, COLOR_B, SQUARE_SIZE } from '../../shared/common/customize'
import { SUBSTRIPE_COUNT } from '../common/customize'
import iterator from '../../shared/utilities/iterator'
import houndazzleSquare from '../components/houndazzleSquare'

const HOUNDAZZLE_SUPERTILE = [
    [
        "STRIPED_A",
        "HORIZONTAL_SUBSTRIPES"
    ],
    [
        "VERTICAL_SUBSTRIPES",
        "STRIPED_B"
    ]
]

export default () => {
    iterator(GRID_SIZE).forEach(x => {
        iterator(GRID_SIZE).forEach(y => {
            houndazzleSquare({
                origin: [ x * SQUARE_SIZE, y * SQUARE_SIZE ],
                size: SQUARE_SIZE,
                squareType: HOUNDAZZLE_SUPERTILE[ x % 2 ][ y % 2 ],
                substripeCount: SUBSTRIPE_COUNT
            })
        })
    })
}