import flipXAndY from './flipXAndY'

export default ({ tileOrigin, sizedUnit, coordinatesOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	let { stripeStart, stripeEnd, orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = sizedUnit / substripeCount

	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	stripeStart = stripeStart * sizedUnit - substripeStart
	stripeEnd = stripeEnd * sizedUnit - substripeStart

	if (stripeIsOutsideSubstripe({ stripeStart, stripeEnd, substripeUnit, sizedUnit })) return

	let coordinates = []

	coordinates = coordinates.concat(
		topLeftCornerWhichMayAlsoBeTopRight({ x, y, stripeStart, sizedUnit, substripeStart })
	)
	coordinates = coordinates.concat(
		topRightCornerAndPossiblyAlsoAMiddleRightCorner({ x, y, stripeStart, stripeEnd, sizedUnit, substripeStart, substripeUnit })
	)
	coordinates = coordinates.concat(
		bottomRightCorner({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, sizedUnit })
	)

	if (stripeEnd - substripeUnit >= sizedUnit || stripeEnd - substripeUnit >= 0) {
		coordinates = coordinates.concat(
			bottomLeftCornerAndPossiblyAlsoMiddleLeftCorner({ x, y, stripeStart, substripeUnit, substripeEnd, substripeStart })
		)
	}

	if (orientation === 'VERTICAL') coordinates = flipXAndY({ coordinates, tileOrigin })
	return coordinates
}

const topLeftCornerWhichMayAlsoBeTopRight = ({ x, y, stripeStart, sizedUnit, substripeStart }) => {
	let newCoordinates = []

	if (stripeStart > sizedUnit) {
		newCoordinates.push([
			x + sizedUnit,
			y + substripeStart + stripeStart - sizedUnit,
		])
	}
	else if (stripeStart >= 0) {
		newCoordinates.push([
			x + stripeStart,
			y + substripeStart,
		])
	}
	else {
		newCoordinates.push([
			x,
			y + substripeStart,
		])
	}

	return newCoordinates
}

const topRightCornerAndPossiblyAlsoAMiddleRightCorner = ({ x, y, stripeStart, stripeEnd, sizedUnit, substripeStart, substripeUnit }) => {
	let newCoordinates = []

	if (stripeEnd <= sizedUnit) {
		newCoordinates.push([
			x + stripeEnd,
			y + substripeStart,
		])
	}
	else {
		if (stripeStart < sizedUnit) {
			newCoordinates.push([
				x + sizedUnit,
				y + substripeStart,
			])
		}
		if (stripeEnd < sizedUnit + substripeUnit) {
			newCoordinates.push([
				x + sizedUnit,
				y + substripeStart + stripeEnd - sizedUnit,
			])
		}
	}

	return newCoordinates
}

const bottomRightCorner = ({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, sizedUnit }) => {
	let newCoordinates = []

	if (stripeEnd - substripeUnit >= sizedUnit) {
		newCoordinates.push([
			x + sizedUnit,
			y + substripeEnd,
		])
	}
	else if (stripeEnd - substripeUnit >= 0) {
		newCoordinates.push([
			x + stripeEnd - substripeUnit,
			y + substripeEnd,
		])
	}
	else {
		newCoordinates.push([
			x,
			y + substripeStart + stripeEnd,
		])
	}

	return newCoordinates
}

const bottomLeftCornerAndPossiblyAlsoMiddleLeftCorner = ({ x, y, stripeStart, substripeUnit, substripeEnd, substripeStart }) => {
	let newCoordinates = []

	if (stripeStart - substripeUnit > 0) {
		newCoordinates.push([
			x + stripeStart - substripeUnit,
			y + substripeEnd,
		])
	}
	else {
		newCoordinates.push([
			x,
			y + substripeEnd,
		])
		if (stripeStart > 0) {
			newCoordinates.push([
				x,
				y + substripeStart + stripeStart,
			])
		}
	}

	return newCoordinates
}

const stripeIsOutsideSubstripe = ({ stripeStart, stripeEnd, substripeUnit, sizedUnit }) => {
	if (stripeIsOutsideRightExtremeOfSubstripe({ stripeStart, substripeUnit, sizedUnit })) return true
	if (stripeIsOutsideLeftExtremeOfSubstripe({ stripeEnd })) return true
	return false
}

const stripeIsOutsideRightExtremeOfSubstripe = ({ stripeStart, substripeUnit, sizedUnit }) => {
	return stripeStart - substripeUnit >= sizedUnit
}

const stripeIsOutsideLeftExtremeOfSubstripe = ({ stripeEnd }) => {
	return stripeEnd <= 0
}
