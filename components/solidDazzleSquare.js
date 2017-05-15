import { UNIT } from '../../shared/common/customize'
import scaleOrigin from '../../shared/utilities/scaleOrigin'
import drawSubstripes from '../render/drawSubstripes'

export default ({ origin, size, originSubstripeDirection, scaleFromCenter, substripeCount }) => {
	origin = scaleOrigin({ origin, scaleFromCenter })
	const sizedUnit = UNIT * size

	drawSubstripes({ substripeCount, sizedUnit, origin, originSubstripeDirection })
}