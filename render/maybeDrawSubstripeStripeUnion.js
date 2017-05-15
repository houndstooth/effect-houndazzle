import calculateSubstripeStripeUnionCoordinates from '../utilities/calculateSubstripeStripeUnionCoordinates'
import render from '../../shared/render/render'

export default ({ stripeIndex, stripeUnit, substripeDirectionOffset, currentSubstripePosition, sizedUnit, substripeUnit, color, origin }) => {
	// the 2 is for skipping every other parallelogram,
	// because that's where the holes for the other substripe direction go
	let currentStripePosition = stripeIndex * stripeUnit * 2 + substripeDirectionOffset - currentSubstripePosition

	// this stripe is completely off the right edge of the substripe
	if (currentStripePosition - substripeUnit >= sizedUnit) return
	// this stripe is completely off the left edge of the substripe
	if (currentStripePosition + stripeUnit <= 0) return

	const coordinates = calculateSubstripeStripeUnionCoordinates({
		currentStripePosition,
		currentSubstripePosition,
		stripeUnit,
		substripeUnit,
		sizedUnit,
		origin
	})

	render({ color, coordinates })
}