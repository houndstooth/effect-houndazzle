import iterator from '../../shared/utilities/iterator'
import render from '../../shared/render/render'
import assignOriginAndOtherColor from '../utilities/assignOriginAndOtherColor'

export default ({ substripeCount, sizedUnit, origin, originSubstripeDirection }) => {
	const substripeUnit = sizedUnit / substripeCount

	const colors = assignOriginAndOtherColor({originSubstripeDirection})

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

		const color = colors[ substripeIndex % 2 ]

		render({ color, coordinates })
	})
}