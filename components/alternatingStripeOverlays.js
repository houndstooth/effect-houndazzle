import iterator from '../../shared/utilities/iterator'
import drawFancyPatchup from '../render/drawFancyPatchup'
import substripeStripeUnion from './substripeStripeUnion'
import assignOriginAndOtherColor from '../utilities/assignOriginAndOtherColor'
import { STRIPE_COUNT } from '../../shared/common/customize'
import { DAZZLE_CONTINUUM } from '../common/customize'

export default ({ substripeCount, sizedUnit, origin, originSubstripeDirection }) => {
	const substripeUnit = sizedUnit / substripeCount
	const stripeUnit = sizedUnit * 2 / STRIPE_COUNT
	const substripeDirectionOffset = originSubstripeDirection === 'VERTICAL' ? stripeUnit : 0

	// because whether or not the origin substripe direction is vertical,
	// we're going to be drawing horizontal substripes here
	const colors = assignOriginAndOtherColor({ originSubstripeDirection: 'HORIZONTAL' })

	iterator(substripeCount).forEach(substripeIndex => {
		let currentSubstripePosition = substripeIndex * substripeUnit
		const color = colors[ substripeIndex % 2 ]

		iterator(Math.ceil(STRIPE_COUNT)).forEach(stripeIndex => {
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

	if (DAZZLE_CONTINUUM) {
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