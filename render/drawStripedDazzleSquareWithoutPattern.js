import { UNIT, COLOR_A, COLOR_B } from '../../shared/common/customize'
import render from '../../shared/render/render'
import scaleOrigin from '../../shared/utilities/scaleOrigin'
import iterator from '../../shared/utilities/iterator'
import calculateSubstripeStripeUnionCoordinates from '../utilities/calculateSubstripeStripeUnionCoordinates'

const STRIPE_COUNT = 16

export default ({ origin, size, originSubstripeDirection, scaleFromCenter, substripeCount }) => {
	console.log('drawing a striped dazzle square without pattern woohoo')
	origin = scaleOrigin({ origin, scaleFromCenter })
	const sizedUnit = UNIT * size
	const stripeUnit = sizedUnit * 2 / STRIPE_COUNT
	const substripeUnit = sizedUnit / substripeCount

	// draw underlying vertical stripes
	iterator(substripeCount).forEach(substripeIndex => {
		let currentSubstripePosition = substripeIndex * substripeUnit
		let nextSubstripePosition = currentSubstripePosition + substripeUnit
		const color = substripeIndex % 2 ? COLOR_B : COLOR_A

		const coordinates = [
			[
				origin[ 0 ] + currentSubstripePosition,
				origin[ 1 ]
			],
			[
				origin[ 0 ] + nextSubstripePosition,
				origin[ 1 ]
			],
			[
				origin[ 0 ] + nextSubstripePosition,
				origin[ 1 ] + sizedUnit
			],
			[
				origin[ 0 ] + currentSubstripePosition,
				origin[ 1 ] + sizedUnit
			],
		]
		render({ color, coordinates })
	})

	// for each substripe
	iterator(substripeCount).forEach(substripeIndex => {
		let currentSubstripePosition = substripeIndex * substripeUnit
		const color = substripeIndex % 2 ? COLOR_A : COLOR_B

		// for each stripe
		iterator(STRIPE_COUNT).forEach(stripeIndex => {
			// the 2 is for skipping every other parallelogram, because that's where the holes for the other substripe direction go
			let currentStripePosition = stripeIndex * stripeUnit * 2 - currentSubstripePosition

			// this stripe is off the right edge of the substripe
			if (currentStripePosition - substripeUnit >= sizedUnit) return
			// this stripe is off the left edge of the substripe
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
		})
	})
}