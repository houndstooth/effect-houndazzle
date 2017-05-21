import iterator from '../../shared/utilities/iterator'
import drawFancyPatchup from '../render/drawFancyPatchup'
import substripeStripeUnion from './substripeStripeUnion'
import assignOriginAndOtherColor from '../utilities/assignOriginAndOtherColor'
import calculateColor from '../../shared/utilities/calculateColor'
import state from '../../state'

export default ({ substripeCount, sizedUnit, origin, originSubstripeDirection }) => {
	const { baseCount: stripeCount } = state.shared.stripeCount
	const { dazzleContinuum } = state.houndazzle

	const substripeUnit = sizedUnit / substripeCount
	const stripeUnit = sizedUnit * 2 / stripeCount
	const substripeDirectionOffset = originSubstripeDirection === 'VERTICAL' ? stripeUnit : 0

	// because whether or not the origin substripe direction is vertical,
	// we're going to be drawing horizontal substripes here
	const colors = assignOriginAndOtherColor({ originSubstripeDirection: 'HORIZONTAL' })

	iterator(substripeCount).forEach(substripeIndex => {
		let currentSubstripePosition = substripeIndex * substripeUnit
		const color = calculateColor({ colors, index: substripeIndex })

		iterator(stripeCount).forEach(stripeIndex => {
			substripeStripeUnion({
				stripeIndex,
				stripeUnit,
				substripeDirectionOffset,
				currentSubstripePosition,
				sizedUnit,
				substripeUnit,
				color,
				origin,
				colors
			})
		})
	})

	if (dazzleContinuum) {
		drawFancyPatchup({
			originSubstripeDirection,
			substripeCount,
			substripeUnit,
			origin,
			sizedUnit,
			colors
		})
	}
}