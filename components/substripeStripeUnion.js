import maybeDrawSubstripeStripeUnion from '../render/maybeDrawSubstripeStripeUnion'
import calculateColor from '../utilities/calculateColor'
import { STRIPE_COUNT } from '../../shared/common/customize'
import { DAZZLE_CONTINUUM } from '../common/customize'

export default ({stripeIndex, stripeUnit, substripeDirectionOffset, currentSubstripePosition, sizedUnit, substripeUnit, color, origin, originColor, otherColor}) => {

	// have to divide by 4 because this is actually a "half index" since we skip every other stripe...
	if (!DAZZLE_CONTINUUM || stripeIndex < STRIPE_COUNT / 4) {
		maybeDrawSubstripeStripeUnion({
			stripeIndex,
			stripeUnit,
			substripeDirectionOffset,
			currentSubstripePosition,
			sizedUnit,
			substripeUnit,
			color,
			origin
		})
	} else {
		maybeDrawSubstripeStripeUnion({
			stripeIndex,
			stripeUnit,
			substripeDirectionOffset,
			currentSubstripePosition,
			sizedUnit,
			substripeUnit: substripeUnit / 2,
			color: calculateColor({ substripeIndex: 0, originColor, otherColor }),
			origin
		})
		maybeDrawSubstripeStripeUnion({
			stripeIndex,
			stripeUnit,
			substripeDirectionOffset,
			currentSubstripePosition: currentSubstripePosition + (substripeUnit / 2),
			sizedUnit,
			substripeUnit: substripeUnit / 2,
			color: calculateColor({ substripeIndex: 1, originColor, otherColor }),
			origin
		})
	}
}