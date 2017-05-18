import { COLOR_A, COLOR_B } from '../../shared/common/customize'

export default ({ originSubstripeDirection }) => {
	let colors = []
	colors[ 0 ] = originSubstripeDirection === 'VERTICAL' ? COLOR_B : COLOR_A
	colors[ 1 ] = colors[ 0 ] === COLOR_A ? COLOR_B : COLOR_A

	return colors
}