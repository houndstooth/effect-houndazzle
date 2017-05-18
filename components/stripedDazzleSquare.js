import { UNIT } from '../../shared/common/customize'
import scalePoint from '../../shared/utilities/scalePoint'
import drawUnderlyingSubstripesHalfSmaller from '../render/drawUnderlyingSubstripesHalfSmaller'
import drawSubstripes from '../render/drawSubstripes'
import alternatingStripeOverlays from './alternatingStripeOverlays'
import { DAZZLE_CONTINUUM } from '../common/customize'

export default ({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = UNIT * size

	if (DAZZLE_CONTINUUM) {
		drawUnderlyingSubstripesHalfSmaller({
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