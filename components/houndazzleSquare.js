import drawStripedDazzleSquare from '../render/drawStripedDazzleSquare'
import drawSolidDazzleSquare from '../render/drawSolidDazzleSquare'

export default ({ origin, size, squareType, scaleFromCenter, substripeCount }) => {
    size = size || 1

    let originSubstripeDirection = squareType == "STRIPED_A" || squareType == "VERTICAL_SUBSTRIPES" ? "VERTICAL" : "HORIZONTAL"
    let dazzleSquareFunction = squareType == "STRIPED_A" || squareType == "STRIPED_B" ? drawStripedDazzleSquare : drawSolidDazzleSquare

    dazzleSquareFunction({origin, size, originSubstripeDirection, scaleFromCenter, substripeCount})
}