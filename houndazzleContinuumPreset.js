
/*
import grid from '../shared/components/grid'
import scalePoint from '../shared/utilities/scalePoint'
import state from '../shared/state/state'
import iterator from '../shared/utilities/iterator'
import render from '../shared/render/render'
import calculateColor from '../shared/utilities/calculateColor'

const HOUNDAZZLE_SUPERTILE = [
	[
		"STRIPED_A",
		"HORIZONTAL_SUBSTRIPES"
	],
	[
		"VERTICAL_SUBSTRIPES",
		"STRIPED_B"
	]
]

const calculateSubstripeStripeUnionCoordinates = ({ currentStripePosition, currentSubstripePosition, stripeUnit, substripeUnit, sizedUnit, origin }) => {
	const nextStripePosition = currentStripePosition + stripeUnit
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

const calculateSubstripeCount = ({ distanceFromOrigin }) => {
	return Math.pow(
		2,
		Math.floor(
			(
				distanceFromOrigin + 1
			) / 2
		) + 1
	)
}

const drawSubstripes = ({ substripeCount, sizedUnit, origin, originSubstripeDirection }) => {
	const substripeUnit = sizedUnit / substripeCount

	const colors = assignOriginAndOtherColor({ originSubstripeDirection })

	iterator(substripeCount).forEach(substripeIndex => {
		const currentSubstripePosition = substripeIndex * substripeUnit
		const nextSubstripePosition = currentSubstripePosition + substripeUnit

		let coordinates
		if (originSubstripeDirection === 'VERTICAL') {
			coordinates = [
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
		} else if (originSubstripeDirection === 'HORIZONTAL') {
			coordinates = [
				[
					origin[ 0 ],
					origin[ 1 ] + currentSubstripePosition
				],
				[
					origin[ 0 ],
					origin[ 1 ] + nextSubstripePosition
				],
				[
					origin[ 0 ] + sizedUnit,
					origin[ 1 ] + nextSubstripePosition
				],
				[
					origin[ 0 ] + sizedUnit,
					origin[ 1 ] + currentSubstripePosition
				],
			]
		}

		const color = calculateColor({ colors, substripeIndex })

		render({ color, coordinates })
	})
}

const assignOriginAndOtherColor = ({ originSubstripeDirection }) => {
	const { colorA, colorB } = state.shared.colors
	let colors = []
	colors[ 0 ] = originSubstripeDirection === 'VERTICAL' ? colorB : colorA
	colors[ 1 ] = colors[ 0 ] === colorA ? colorB : colorA

	return colors
}

const maybeDrawSubstripeStripeUnion = ({ stripeIndex, stripeUnit, substripeDirectionOffset, currentSubstripePosition, sizedUnit, substripeUnit, color, origin }) => {
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

const drawUnderlyingSubstripesHalfSmaller = ({ substripeCount, sizedUnit, origin }) => {
	const substripeUnit = sizedUnit / substripeCount

	const colors = assignOriginAndOtherColor({ originSubstripeDirection: 'VERTICAL' })

	// top half, bigger substripes
	iterator(substripeCount).forEach(substripeIndex => {
		const currentSubstripePosition = substripeIndex * substripeUnit
		const nextSubstripePosition = currentSubstripePosition + substripeUnit

		let coordinates
		coordinates = [
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
				origin[ 1 ] + sizedUnit - nextSubstripePosition
			],
			[
				origin[ 0 ] + currentSubstripePosition,
				origin[ 1 ] + sizedUnit - currentSubstripePosition
			],
		]

		const color = calculateColor({ colors, substripeIndex })

		render({ color, coordinates })
	})

	// bottom half, smaller substripes
	iterator(substripeCount * 2).forEach(substripeIndex => {
		const currentSubstripePosition = substripeIndex * substripeUnit / 2
		const nextSubstripePosition = currentSubstripePosition + substripeUnit / 2

		let coordinates
		coordinates = [
			[
				origin[ 0 ] + currentSubstripePosition,
				origin[ 1 ] + sizedUnit - currentSubstripePosition
			],
			[
				origin[ 0 ] + nextSubstripePosition,
				origin[ 1 ] + sizedUnit - nextSubstripePosition
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

		const color = calculateColor({ colors, substripeIndex })

		render({ color, coordinates })
	})
}

const drawFancyPatchup = ({ originSubstripeDirection, substripeCount, substripeUnit, origin, sizedUnit, colors }) => {
	const verticalModifier = originSubstripeDirection === 'VERTICAL' ? 1 : 0
	iterator(substripeCount * 2).forEach(substripeIndex => {
		if (substripeIndex % 4 === 3 || substripeIndex % 4 === 0) return

		let currentSubstripePosition = substripeIndex * (substripeUnit / 2)
		const coordinates = [
			[
				origin[ 0 ] + (sizedUnit - currentSubstripePosition),
				origin[ 1 ] + currentSubstripePosition + (substripeUnit / 2)
			],
			[
				origin[ 0 ] + (sizedUnit - currentSubstripePosition) - (substripeUnit / 2),
				origin[ 1 ] + currentSubstripePosition + (substripeUnit / 2)
			],
			[
				origin[ 0 ] + (sizedUnit - currentSubstripePosition) - (substripeUnit / 2),
				origin[ 1 ] + currentSubstripePosition
			],
			[
				origin[ 0 ] + (sizedUnit - currentSubstripePosition),
				origin[ 1 ] + currentSubstripePosition
			]
		]

		const colorsIndex = substripeIndex % 4 === 1 ? verticalModifier % 2 : (verticalModifier + 1) % 2
		const color = colors[ colorsIndex ]

		render({ color, coordinates })
	})
}

const substripeStripeUnion = ({
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
	const { dazzleContinuum } = state.shared.colors.houndazzle

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

const alternatingStripeOverlays = ({ substripeCount, sizedUnit, origin, originSubstripeDirection }) => {
	const { baseCount: stripeCount } = state.shared.stripeCount
	const { dazzleContinuum } = state.shared.colors.houndazzle

	const substripeUnit = sizedUnit / substripeCount
	const stripeUnit = sizedUnit * 2 / stripeCount
	const substripeDirectionOffset = originSubstripeDirection === 'VERTICAL' ? stripeUnit : 0

	// because whether or not the origin substripe direction is vertical,
	// we're going to be drawing horizontal substripes here
	const colors = assignOriginAndOtherColor({ originSubstripeDirection: 'HORIZONTAL' })

	iterator(substripeCount).forEach(substripeIndex => {
		let currentSubstripePosition = substripeIndex * substripeUnit
		const color = calculateColor({ colors, substripeIndex })

		iterator(stripeCount).forEach(stripeIndex => {
			substripeStripeUnion({
				stripeIndex,
				stripeUnit,
				substripeDirectionOffset,
				currentSubstripePosition,
				sizedUnit,
				substripeUnit,
				color,
				origin,
				colors
			})
		})
	})

	if (dazzleContinuum) {
		drawFancyPatchup({
			originSubstripeDirection,
			substripeCount,
			substripeUnit,
			origin,
			sizedUnit,
			colors
		})
	}
}

const stripedDazzleTile = ({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = state.shared.unit * size

	if (state.shared.colors.houndazzle.dazzleContinuum) {
		drawUnderlyingSubstripesHalfSmaller({
			substripeCount,
			sizedUnit,
			origin
		})
	} else {
		drawSubstripes({
			substripeCount,
			sizedUnit,
			origin,
			originSubstripeDirection: 'VERTICAL'
		})
	}

	alternatingStripeOverlays({
		substripeCount,
		sizedUnit,
		origin,
		originSubstripeDirection
	})
}

const solidDazzleTile = ({ origin, size, originSubstripeDirection, scaleFromGridCenter, substripeCount }) => {
	origin = scalePoint({ point: origin, scaleFromGridCenter })
	const sizedUnit = state.shared.unit * size

	drawSubstripes({ substripeCount, sizedUnit, origin, originSubstripeDirection })
}

const dazzleTile = ({ origin: initialOrigin }) => {
	const { tileSize } = state.shared
	const { dazzleContinuum, substripeCount: stateSubstripeCount } = state.shared.colors.houndazzle
	const origin = [ initialOrigin[ 0 ] * tileSize, initialOrigin[ 1 ] * tileSize ]
	const size = tileSize
	const tileType = HOUNDAZZLE_SUPERTILE[ initialOrigin[ 0 ] % 2 ][ initialOrigin[ 1 ] % 2 ]
	const substripeCount = dazzleContinuum ? calculateSubstripeCount({ distanceFromOrigin: initialOrigin[ 0 ] + initialOrigin[ 1 ] }) : stateSubstripeCount

	let originSubstripeDirection = tileType === "STRIPED_A" || tileType === "VERTICAL_SUBSTRIPES" ? "VERTICAL" : "HORIZONTAL"
	let dazzleFunction = tileType === "STRIPED_A" || tileType === "STRIPED_B" ? stripedDazzleTile : solidDazzleTile

	dazzleFunction({ origin, size, originSubstripeDirection, substripeCount })
}

export default () => grid({ tile: dazzleTile })
*/

import { WHITE } from '../shared/render/colors'

export default {
	state: {
		shared: {
			colors: {
				houndazzle: {
					on: true,
					substripeCount: 16,
					dazzleContinuum: true // probably want to make this an object with { on, initial, delta } too
				},
				colorB: WHITE
			}
		}
	},
	iterations: {},
	animations: {}
}