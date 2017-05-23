import calculateSubstripeCount from '../utilities/calculateSubstripeCount'
import stripedDazzleSquare from './stripedDazzleSquare'
import solidDazzleSquare from './solidDazzleSquare'
import state from '../../shared/application/state'

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

export default ({ origin: initialOrigin }) => {
	const { tileSize } = state.shared
	const { dazzleContinuum, substripeCount: stateSubstripeCount } = state.houndazzle
	const origin = [ initialOrigin[ 0 ] * tileSize, initialOrigin[ 1 ] * tileSize ]
	const size = tileSize
	const squareType = HOUNDAZZLE_SUPERTILE[ initialOrigin[ 0 ] % 2 ][ initialOrigin[ 1 ] % 2 ]
	const substripeCount = dazzleContinuum ? calculateSubstripeCount({ distanceFromOrigin: initialOrigin[ 0 ] + initialOrigin[ 1 ] }) : stateSubstripeCount

	let originSubstripeDirection = squareType === "STRIPED_A" || squareType === "VERTICAL_SUBSTRIPES" ? "VERTICAL" : "HORIZONTAL"
	let dazzleFunction = squareType === "STRIPED_A" || squareType === "STRIPED_B" ? stripedDazzleSquare : solidDazzleSquare

	dazzleFunction({ origin, size, originSubstripeDirection, substripeCount })
}