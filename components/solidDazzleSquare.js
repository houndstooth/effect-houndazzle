import scalePoint from '../../shared/utilities/scalePoint'
import drawSubstripes from '../render/drawSubstripes'
import state from '../../state'

export default ({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = state.shared.unit * size

	drawSubstripes({ substripeCount, sizedUnit, origin, originSubstripeDirection })
}