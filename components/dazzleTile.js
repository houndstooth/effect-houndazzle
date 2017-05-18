import { SQUARE_SIZE } from '../../shared/common/customize'
import { DAZZLE_CONTINUUM, SUBSTRIPE_COUNT } from '../common/customize'
import calculateSubstripeCount from '../utilities/calculateSubstripeCount'
import stripedDazzleSquare from './stripedDazzleSquare'
import solidDazzleSquare from './solidDazzleSquare'

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

export default ({ x, y }) => {
	const origin = [ x * SQUARE_SIZE, y * SQUARE_SIZE ]
	const size = SQUARE_SIZE
	const squareType = HOUNDAZZLE_SUPERTILE[ x % 2 ][ y % 2 ]
	const substripeCount = DAZZLE_CONTINUUM ? calculateSubstripeCount({distanceFromOrigin: x + y}) : SUBSTRIPE_COUNT

	let originSubstripeDirection = squareType === "STRIPED_A" || squareType === "VERTICAL_SUBSTRIPES" ? "VERTICAL" : "HORIZONTAL"
	let dazzleFunction = squareType === "STRIPED_A" || squareType === "STRIPED_B" ? stripedDazzleSquare : solidDazzleSquare

	dazzleFunction({ origin, size, originSubstripeDirection, substripeCount })
}