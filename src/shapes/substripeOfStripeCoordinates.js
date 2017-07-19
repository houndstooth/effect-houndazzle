import flipXAndY from '../utilities/flipXAndY'

export default ({ tileOrigin, zoomedTileSize, coordinatesOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	let { stripeStart, stripeEnd, orientation, substripeIndex, substripeCount } = coordinatesOptions
	const substripeUnit = zoomedTileSize / substripeCount

	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	stripeStart = stripeStart * zoomedTileSize - substripeStart
	stripeEnd = stripeEnd * zoomedTileSize - substripeStart

	if (stripeIsOutsideSubstripe({ stripeStart, stripeEnd, substripeUnit, zoomedTileSize })) return

	let coordinates = []

	coordinates = coordinates.concat(
		topLeftCornerWhichMayAlsoBeTopRight({ x, y, stripeStart, zoomedTileSize, substripeStart })
	)
	coordinates = coordinates.concat(
		topRightCornerAndPossiblyAlsoAMiddleRightCorner({
			x,
			y,
			stripeStart,
			stripeEnd,
			zoomedTileSize,
			substripeStart,
			substripeUnit,
		})
	)
	coordinates = coordinates.concat(
		bottomRightCorner({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, zoomedTileSize })
	)

	if (stripeEnd - substripeUnit >= zoomedTileSize || stripeEnd - substripeUnit >= 0) {
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

const topLeftCornerWhichMayAlsoBeTopRight = ({ x, y, stripeStart, zoomedTileSize, substripeStart }) => {
	let newCoordinates = []

	if (stripeStart > zoomedTileSize) {
		newCoordinates.push([
			x + zoomedTileSize,
			y + substripeStart + stripeStart - zoomedTileSize,
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

const topRightCornerAndPossiblyAlsoAMiddleRightCorner = ({ x, y, stripeStart, stripeEnd, zoomedTileSize, substripeStart, substripeUnit }) => {
	let newCoordinates = []

	if (stripeEnd <= zoomedTileSize) {
		newCoordinates.push([
			x + stripeEnd,
			y + substripeStart,
		])
	}
	else {
		if (stripeStart < zoomedTileSize) {
			newCoordinates.push([
				x + zoomedTileSize,
				y + substripeStart,
			])
		}
		if (stripeEnd < zoomedTileSize + substripeUnit) {
			newCoordinates.push([
				x + zoomedTileSize,
				y + substripeStart + stripeEnd - zoomedTileSize,
			])
		}
	}

	return newCoordinates
}

const bottomRightCorner = ({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, zoomedTileSize }) => {
	let newCoordinates = []

	if (stripeEnd - substripeUnit >= zoomedTileSize) {
		newCoordinates.push([
			x + zoomedTileSize,
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

const stripeIsOutsideSubstripe = ({ stripeStart, stripeEnd, substripeUnit, zoomedTileSize }) => {
	if (stripeIsOutsideRightExtremeOfSubstripe({ stripeStart, substripeUnit, zoomedTileSize })) return true
	if (stripeIsOutsideLeftExtremeOfSubstripe({ stripeEnd })) return true
	return false
}

const stripeIsOutsideRightExtremeOfSubstripe = ({ stripeStart, substripeUnit, zoomedTileSize }) => {
	return stripeStart - substripeUnit >= zoomedTileSize
}

const stripeIsOutsideLeftExtremeOfSubstripe = ({ stripeEnd }) => {
	return stripeEnd <= 0
}
