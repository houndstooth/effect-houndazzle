import iterator from '../../shared/utilities/iterator'
import render from '../../shared/render/render'
import assignOriginAndOtherColor from '../utilities/assignOriginAndOtherColor'
import calculateColor from '../utilities/calculateColor'

export default ({ substripeCount, sizedUnit, origin }) => {
	const substripeUnit = sizedUnit / substripeCount

	const { originColor, otherColor } = assignOriginAndOtherColor({ originSubstripeDirection: 'VERTICAL' })

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

		const color = calculateColor({ substripeIndex, originColor, otherColor })

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

		const color = calculateColor({ substripeIndex, originColor, otherColor })

		render({ color, coordinates })
	})
}