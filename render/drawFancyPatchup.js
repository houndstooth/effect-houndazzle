import iterator from '../../shared/utilities/iterator'
import render from '../../shared/render/render'
import calculateColor from '../utilities/calculateColor'

export default ({ originSubstripeDirection, substripeCount, substripeUnit, origin, sizedUnit, originColor, otherColor }) => {
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

		const color = calculateColor({
			substripeIndex: substripeIndex % 4 === 1 ? verticalModifier : verticalModifier + 1,
			originColor,
			otherColor
		})

		render({ color, coordinates })
	})
}