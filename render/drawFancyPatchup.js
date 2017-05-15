import iterator from '../../shared/utilities/iterator'
import render from '../../shared/render/render'
import calculateColor from '../utilities/calculateColor'

export default ({originSubstripeDirection, substripeCount, substripeUnit, origin, sizedUnit, originColor, otherColor}) => {
	const verticalModifier = originSubstripeDirection == 'VERTICAL' ? 1 : 0
	iterator(substripeCount * 2).forEach(substripeIndex => {
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

		if (substripeIndex % 4 == 1) {
			const color = calculateColor({ substripeIndex: verticalModifier, originColor, otherColor })
			render({ coordinates, color })
		} else if (substripeIndex % 4 == 2) {
			const color = calculateColor({ substripeIndex: verticalModifier + 1, originColor, otherColor })
			render({ coordinates, color })
		}
	})
}