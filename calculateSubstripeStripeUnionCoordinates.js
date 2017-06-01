import flipXAndY from './flipXAndY'

const calculateSubstripeStripeUnionCoordinates = ({
	currentStripePosition,
	nextStripePosition,
	currentSubstripePosition,
	substripeUnit,
	sizedUnit,
	origin
}) => {
	const nextSubstripePosition = currentSubstripePosition + substripeUnit

	const coordinates = []

	// top left (which may also turn out to be top right)
	if (currentStripePosition > sizedUnit) {
		coordinates.push([
			origin[ 0 ] + sizedUnit,
			origin[ 1 ] + currentSubstripePosition + currentStripePosition - sizedUnit
		])
	} else if (currentStripePosition >= 0) {
		coordinates.push([
			origin[ 0 ] + currentStripePosition,
			origin[ 1 ] + currentSubstripePosition
		])
	} else {
		coordinates.push([
			origin[ 0 ],
			origin[ 1 ] + currentSubstripePosition
		])
	}

	// possibly top right, and possibly middle right
	if (nextStripePosition <= sizedUnit) {
		coordinates.push([
			origin[ 0 ] + nextStripePosition,
			origin[ 1 ] + currentSubstripePosition
		])
	} else {
		if (currentStripePosition < sizedUnit) {
			coordinates.push([
				origin[ 0 ] + sizedUnit,
				origin[ 1 ] + currentSubstripePosition
			])
		}
		if (nextStripePosition < sizedUnit + substripeUnit) {
			coordinates.push([
				origin[ 0 ] + sizedUnit,
				origin[ 1 ] + currentSubstripePosition + nextStripePosition - sizedUnit
			])
		}
	}

	// bottom right, and potentially early return to skip last section
	if (nextStripePosition - substripeUnit >= sizedUnit) {
		coordinates.push([
			origin[ 0 ] + sizedUnit,
			origin[ 1 ] + nextSubstripePosition
		])
	} else if (nextStripePosition - substripeUnit >= 0) {
		coordinates.push([
			origin[ 0 ] + nextStripePosition - substripeUnit,
			origin[ 1 ] + nextSubstripePosition
		])
	} else {
		coordinates.push([
			origin[ 0 ],
			origin[ 1 ] + currentSubstripePosition + nextStripePosition
		])
		return coordinates
	}

	// if not skipping this section due to early return, bottom left, and possibly middle left
	if (currentStripePosition - substripeUnit > 0) {
		coordinates.push([
			origin[ 0 ] + currentStripePosition - substripeUnit,
			origin[ 1 ] + nextSubstripePosition
		])
	} else {
		coordinates.push([
			origin[ 0 ],
			origin[ 1 ] + nextSubstripePosition
		])
		if (currentStripePosition > 0) {
			coordinates.push([
				origin[ 0 ],
				origin[ 1 ] + currentSubstripePosition + currentStripePosition
			])
		}
	}

	return coordinates
}

export default ({ origin, sizedUnit, stripeIndex, substripeIndex, coordinatesFunctionArguments }) => {
	const { currentPositionAlongPerimeter, nextPositionAlongPerimeter, substripeUnit, orientation } = coordinatesFunctionArguments
	const currentSubstripePosition = substripeIndex * substripeUnit

	const currentStripePosition = currentPositionAlongPerimeter * sizedUnit - currentSubstripePosition
	const nextStripePosition = nextPositionAlongPerimeter * sizedUnit - currentSubstripePosition

	// this stripe is completely off the right edge of the substripe
	if (currentStripePosition - substripeUnit >= sizedUnit) return
	// this stripe is completely off the left edge of the substripe
	if (nextStripePosition <= 0) return

	let coordinates = calculateSubstripeStripeUnionCoordinates({
		currentStripePosition,
		stripeIndex,
		currentSubstripePosition,
		sizedUnit,
		substripeUnit,
		origin,
		nextStripePosition
	})

	if (orientation === "VERTICAL") coordinates = flipXAndY({ coordinates, origin })

	return coordinates
}
