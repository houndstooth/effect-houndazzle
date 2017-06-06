import flipXAndY from './flipXAndY'

export default ({ shapeOrigin, sizedUnit, coordinatesOptions }) => {
	const x = shapeOrigin[ 0 ]
	const y = shapeOrigin[ 1 ]

	let { stripeStart, stripeEnd, orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = sizedUnit / substripeCount

	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	stripeStart = stripeStart * sizedUnit - substripeStart
	stripeEnd = stripeEnd * sizedUnit - substripeStart

	// this stripe is completely off the right edge of the substripe
	if (stripeStart - substripeUnit >= sizedUnit) return
	// this stripe is completely off the left edge of the substripe
	if (stripeEnd <= 0) return

	let coordinates = []

	// top left (which may also turn out to be top right)
	if (stripeStart > sizedUnit) {
		coordinates.push([
			x + sizedUnit,
			y + substripeStart + stripeStart - sizedUnit
		])
	} else if (stripeStart >= 0) {
		coordinates.push([
			x + stripeStart,
			y + substripeStart
		])
	} else {
		coordinates.push([
			x,
			y + substripeStart
		])
	}

	// possibly top right, and possibly middle right
	if (stripeEnd <= sizedUnit) {
		coordinates.push([
			x + stripeEnd,
			y + substripeStart
		])
	} else {
		if (stripeStart < sizedUnit) {
			coordinates.push([
				x + sizedUnit,
				y + substripeStart
			])
		}
		if (stripeEnd < sizedUnit + substripeUnit) {
			coordinates.push([
				x + sizedUnit,
				y + substripeStart + stripeEnd - sizedUnit
			])
		}
	}

	// bottom right, and potentially early return to skip last section
	if (stripeEnd - substripeUnit >= sizedUnit) {
		coordinates.push([
			x + sizedUnit,
			y + substripeEnd
		])
	} else if (stripeEnd - substripeUnit >= 0) {
		coordinates.push([
			x + stripeEnd - substripeUnit,
			y + substripeEnd
		])
	} else {
		coordinates.push([
			x,
			y + substripeStart + stripeEnd
		])
		return coordinates
	}

	// if not skipping this section due to early return, bottom left, and possibly middle left
	if (stripeStart - substripeUnit > 0) {
		coordinates.push([
			x + stripeStart - substripeUnit,
			y + substripeEnd
		])
	} else {
		coordinates.push([
			x,
			y + substripeEnd
		])
		if (stripeStart > 0) {
			coordinates.push([
				x,
				y + substripeStart + stripeStart
			])
		}
	}

	if (orientation === "VERTICAL") coordinates = flipXAndY({ coordinates, shapeOrigin })

	return coordinates
}
