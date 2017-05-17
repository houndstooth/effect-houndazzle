import stripedDazzleSquare from './stripedDazzleSquare'
import solidDazzleSquare from './solidDazzleSquare'

export default ({ origin, size, squareType, scaleFromGridCenter, substripeCount }) => {
	size = size || 1

	let originSubstripeDirection = squareType == "STRIPED_A" || squareType == "VERTICAL_SUBSTRIPES" ? "VERTICAL" : "HORIZONTAL"
	let dazzleSquare = squareType == "STRIPED_A" || squareType == "STRIPED_B" ? stripedDazzleSquare : solidDazzleSquare

	dazzleSquare({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount })
}