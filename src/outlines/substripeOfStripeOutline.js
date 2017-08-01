import flipXAndY from '../utilities/flipXAndY'

export default ({ tileOrigin, tileSize, outlineOptions }) => {
	const x = tileOrigin[ 0 ]
	const y = tileOrigin[ 1 ]

	let { stripeStart, stripeEnd, orientation, substripeIndex, substripeCount } = outlineOptions
	const substripeUnit = tileSize / substripeCount

	const substripeStart = substripeIndex * substripeUnit
	const substripeEnd = substripeStart + substripeUnit

	stripeStart = stripeStart * tileSize - substripeStart
	stripeEnd = stripeEnd * tileSize - substripeStart

	if (stripeIsOutsideSubstripe({ stripeStart, stripeEnd, substripeUnit, tileSize })) return

	let outline = []

	const tlcwmabtr = topLeftCornerWhichMayAlsoBeTopRight({ x, y, stripeStart, tileSize, substripeStart })
	outline = outline.concat(tlcwmabtr)
	const trcapamrc = topRightCornerAndPossiblyAlsoAMiddleRightCorner({
		x,
		y,
		stripeStart,
		stripeEnd,
		tileSize,
		substripeStart,
		substripeUnit,
	})
	outline = outline.concat(trcapamrc)
	let brc = bottomRightCorner({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, tileSize })
	outline = outline.concat(brc)

	if (stripeEnd - substripeUnit >= tileSize || stripeEnd - substripeUnit >= 0) {
		const blcapamlc = bottomLeftCornerAndPossiblyAlsoMiddleLeftCorner({
			x,
			y,
			stripeStart,
			substripeUnit,
			substripeEnd,
			substripeStart,
		})
		outline = outline.concat(blcapamlc)
	}

	if (orientation === 'VERTICAL') outline = flipXAndY({ coordinates: outline, tileOrigin })
	return outline
}

const topLeftCornerWhichMayAlsoBeTopRight = ({ x, y, stripeStart, tileSize, substripeStart }) => {
	let newOutline = []

	if (stripeStart > tileSize) {
		newOutline.push([
			x + tileSize,
			y + substripeStart + stripeStart - tileSize,
		])
	}
	else if (stripeStart >= 0) {
		newOutline.push([
			x + stripeStart,
			y + substripeStart,
		])
	}
	else {
		newOutline.push([
			x,
			y + substripeStart,
		])
	}

	return newOutline
}

const topRightCornerAndPossiblyAlsoAMiddleRightCorner = ({ x, y, stripeStart, stripeEnd, tileSize, substripeStart, substripeUnit }) => {
	let newOutline = []

	if (stripeEnd <= tileSize) {
		newOutline.push([
			x + stripeEnd,
			y + substripeStart,
		])
	}
	else {
		if (stripeStart < tileSize) {
			newOutline.push([
				x + tileSize,
				y + substripeStart,
			])
		}
		if (stripeEnd < tileSize + substripeUnit) {
			newOutline.push([
				x + tileSize,
				y + substripeStart + stripeEnd - tileSize,
			])
		}
	}

	return newOutline
}

const bottomRightCorner = ({ x, y, stripeEnd, substripeStart, substripeEnd, substripeUnit, tileSize }) => {
	let newOutline = []

	if (stripeEnd - substripeUnit >= tileSize) {
		newOutline.push([
			x + tileSize,
			y + substripeEnd,
		])
	}
	else if (stripeEnd - substripeUnit >= 0) {
		newOutline.push([
			x + stripeEnd - substripeUnit,
			y + substripeEnd,
		])
	}
	else {
		newOutline.push([
			x,
			y + substripeStart + stripeEnd,
		])
	}

	return newOutline
}

const bottomLeftCornerAndPossiblyAlsoMiddleLeftCorner = ({ x, y, stripeStart, substripeUnit, substripeEnd, substripeStart }) => {
	let newOutline = []

	if (stripeStart - substripeUnit > 0) {
		newOutline.push([
			x + stripeStart - substripeUnit,
			y + substripeEnd,
		])
	}
	else {
		newOutline.push([
			x,
			y + substripeEnd,
		])
		if (stripeStart > 0) {
			newOutline.push([
				x,
				y + substripeStart + stripeStart,
			])
		}
	}

	return newOutline
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
