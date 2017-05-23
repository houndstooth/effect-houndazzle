import state from '../../shared/application/state'
import scalePoint from '../../shared/utilities/scalePoint'
import drawUnderlyingSubstripesHalfSmaller from '../render/drawUnderlyingSubstripesHalfSmaller'
import drawSubstripes from '../render/drawSubstripes'
import alternatingStripeOverlays from './alternatingStripeOverlays'

export default ({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = state.shared.unit * size

	if (state.houndazzle.dazzleContinuum) {
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