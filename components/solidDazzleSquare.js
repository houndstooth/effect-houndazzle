import { UNIT } from '../../shared/common/customize'
import scalePoint from '../../shared/utilities/scalePoint'
import drawSubstripes from '../render/drawSubstripes'

export default ({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = UNIT * size

	drawSubstripes({ substripeCount, sizedUnit, origin, originSubstripeDirection })
}