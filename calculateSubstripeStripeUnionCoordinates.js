import flipXAndY from './flipXAndY'

const calculateSubstripeStripeUnionCoordinates = ({
	stripeStart,
	stripeEnd,
	substripeStart,
	substripeUnit,
	sizedUnit,
	origin
}) => {
	const nextSubstripePosition = substripeStart + substripeUnit

	const coordinates = []

	// top left (which may also turn out to be top right)
	if (stripeStart > sizedUnit) {
		coordinates.push([
			origin[ 0 ] + sizedUnit,
			origin[ 1 ] + substripeStart + stripeStart - sizedUnit
		])
	} else if (stripeStart >= 0) {
		coordinates.push([
			origin[ 0 ] + stripeStart,
			origin[ 1 ] + substripeStart
		])
	} else {
		coordinates.push([
			origin[ 0 ],
			origin[ 1 ] + substripeStart
		])
	}

	// possibly top right, and possibly middle right
	if (stripeEnd <= sizedUnit) {
		coordinates.push([
			origin[ 0 ] + stripeEnd,
			origin[ 1 ] + substripeStart
		])
	} else {
		if (stripeStart < sizedUnit) {
			coordinates.push([
				origin[ 0 ] + sizedUnit,
				origin[ 1 ] + substripeStart
			])
		}
		if (stripeEnd < sizedUnit + substripeUnit) {
			coordinates.push([
				origin[ 0 ] + sizedUnit,
				origin[ 1 ] + substripeStart + stripeEnd - sizedUnit
			])
		}
	}

	// bottom right, and potentially early return to skip last section
	if (stripeEnd - substripeUnit >= sizedUnit) {
		coordinates.push([
			origin[ 0 ] + sizedUnit,
			origin[ 1 ] + nextSubstripePosition
		])
	} else if (stripeEnd - substripeUnit >= 0) {
		coordinates.push([
			origin[ 0 ] + stripeEnd - substripeUnit,
			origin[ 1 ] + nextSubstripePosition
		])
	} else {
		coordinates.push([
			origin[ 0 ],
			origin[ 1 ] + substripeStart + stripeEnd
		])
		return coordinates
	}

	// if not skipping this section due to early return, bottom left, and possibly middle left
	if (stripeStart - substripeUnit > 0) {
		coordinates.push([
			origin[ 0 ] + stripeStart - substripeUnit,
			origin[ 1 ] + nextSubstripePosition
		])
	} else {
		coordinates.push([
			origin[ 0 ],
			origin[ 1 ] + nextSubstripePosition
		])
		if (stripeStart > 0) {
			coordinates.push([
				origin[ 0 ],
				origin[ 1 ] + substripeStart + stripeStart
			])
		}
	}

	return coordinates
}

export default ({ origin, sizedUnit, stripeIndex, substripeIndex, coordinatesFunctionArguments }) => {
	const { stripeStart: initialStripeStart, stripeEnd: initialStripeEnd, substripeUnit, orientation } = coordinatesFunctionArguments
	const substripeStart = substripeIndex * substripeUnit

	const stripeStart = initialStripeStart * sizedUnit - substripeStart
	const stripeEnd = initialStripeEnd * sizedUnit - substripeStart

	// this stripe is completely off the right edge of the substripe
	if (stripeStart - substripeUnit >= sizedUnit) return
	// this stripe is completely off the left edge of the substripe
	if (stripeEnd <= 0) return

	let coordinates = calculateSubstripeStripeUnionCoordinates({
		stripeStart,
		stripeIndex,
		substripeStart,
		sizedUnit,
		substripeUnit,
		origin,
		stripeEnd
	})

	if (orientation === "VERTICAL") coordinates = flipXAndY({ coordinates, origin })

	return coordinates
}
