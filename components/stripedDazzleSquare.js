import { UNIT } from '../../shared/common/customize'
import scaleOrigin from '../../shared/utilities/scaleOrigin'
import underlyingSubstripesHalfSmaller from './underlyingSubstripesHalfSmaller'
import drawSubstripes from '../render/drawSubstripes'
import alternatingStripeOverlays from './alternatingStripeOverlays'
import { DAZZLE_CONTINUUM } from '../common/customize'

export default ({ origin, size, originSubstripeDirection, scaleFromCenter, substripeCount }) => {
	origin = scaleOrigin({ origin, scaleFromCenter })
	const sizedUnit = UNIT * size

	if (DAZZLE_CONTINUUM) {
		underlyingSubstripesHalfSmaller({
			substripeCount,
			sizedUnit,
			origin
		})
	} else {
		drawSubstripes({
			substripeCount,
			sizedUnit,
			origin,
			originSubstripeDirection: 'VERTICAL'
		})
	}

	alternatingStripeOverlays({
		substripeCount,
		sizedUnit,
		origin,
		originSubstripeDirection
	})
}