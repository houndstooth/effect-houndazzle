import flipXAndY from '../utilities/flipXAndY'

export default ({ tileOrigin, tileSize, coordinatesOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	let { stripeStart, stripeEnd, orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = tileSize / substripeCount

	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	stripeStart = stripeStart * tileSize - substripeStart
	stripeEnd = stripeEnd * tileSize - substripeStart

	if (stripeIsOutsideSubstripe({ stripeStart, stripeEnd, substripeUnit, tileSize })) return

	let coordinates = []

	coordinates = coordinates.concat(
		topLeftCornerWhichMayAlsoBeTopRight({ x, y, stripeStart, tileSize, substripeStart })
	)
	coordinates = coordinates.concat(
		topRightCornerAndPossiblyAlsoAMiddleRightCorner({
			x,
			y,
			stripeStart,
			stripeEnd,
			tileSize,
			substripeStart,
			substripeUnit,
		})
	)
	coordinates = coordinates.concat(
		bottomRightCorner({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, tileSize })
	)

	if (stripeEnd - substripeUnit >= tileSize || stripeEnd - substripeUnit >= 0) {
		coordinates = coordinates.concat(
			bottomLeftCornerAndPossiblyAlsoMiddleLeftCorner({
				x,
				y,
				stripeStart,
				substripeUnit,
				substripeEnd,
				substripeStart,
			})
		)
	}

	if (orientation === 'VERTICAL') coordinates = flipXAndY({ coordinates, tileOrigin })
	return coordinates
}

const topLeftCornerWhichMayAlsoBeTopRight = ({ x, y, stripeStart, tileSize, substripeStart }) => {
	let newCoordinates = []

	if (stripeStart > tileSize) {
		newCoordinates.push([
			x + tileSize,
			y + substripeStart + stripeStart - tileSize,
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

const topRightCornerAndPossiblyAlsoAMiddleRightCorner = ({ x, y, stripeStart, stripeEnd, tileSize, substripeStart, substripeUnit }) => {
	let newCoordinates = []

	if (stripeEnd <= tileSize) {
		newCoordinates.push([
			x + stripeEnd,
			y + substripeStart,
		])
	}
	else {
		if (stripeStart < tileSize) {
			newCoordinates.push([
				x + tileSize,
				y + substripeStart,
			])
		}
		if (stripeEnd < tileSize + substripeUnit) {
			newCoordinates.push([
				x + tileSize,
				y + substripeStart + stripeEnd - tileSize,
			])
		}
	}

	return newCoordinates
}

const bottomRightCorner = ({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, tileSize }) => {
	let newCoordinates = []

	if (stripeEnd - substripeUnit >= tileSize) {
		newCoordinates.push([
			x + tileSize,
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

const stripeIsOutsideSubstripe = ({ stripeStart, stripeEnd, substripeUnit, tileSize }) => {
	if (stripeIsOutsideRightExtremeOfSubstripe({ stripeStart, substripeUnit, tileSize })) return true
	if (stripeIsOutsideLeftExtremeOfSubstripe({ stripeEnd })) return true
	return false
}

const stripeIsOutsideRightExtremeOfSubstripe = ({ stripeStart, substripeUnit, tileSize }) => {
	return stripeStart - substripeUnit >= tileSize
}

const stripeIsOutsideLeftExtremeOfSubstripe = ({ stripeEnd }) => {
	return stripeEnd <= 0
}
