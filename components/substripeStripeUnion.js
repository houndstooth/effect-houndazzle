import maybeDrawSubstripeStripeUnion from '../render/maybeDrawSubstripeStripeUnion'
import state from '../../state'

export default ({ 
	stripeIndex, 
	stripeUnit, 
	substripeDirectionOffset, 
	currentSubstripePosition,
	sizedUnit, 
	substripeUnit, 
	color, 
	origin, 
	colors 
}) => {
	const { baseCount: stripeCount } = state.shared.stripeCount
	const { dazzleContinuum } = state.houndazzle

	// have to divide by 4 because this is actually a "half index" since we skip every other stripe...
	if (!dazzleContinuum || stripeIndex < stripeCount / 4) {
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
			color: colors[ 0 ],
			origin
		})
		maybeDrawSubstripeStripeUnion({
			stripeIndex,
			stripeUnit,
			substripeDirectionOffset,
			currentSubstripePosition: currentSubstripePosition + (substripeUnit / 2),
			sizedUnit,
			substripeUnit: substripeUnit / 2,
			color: colors[ 1 ],
			origin
		})
	}
}