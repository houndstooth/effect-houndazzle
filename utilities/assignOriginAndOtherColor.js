import { COLOR_A, COLOR_B } from '../../shared/common/customize'

export default ({originSubstripeDirection}) => {
	const originColor = originSubstripeDirection === 'VERTICAL' ? COLOR_B : COLOR_A
	const otherColor = originColor === COLOR_A ? COLOR_B : COLOR_A

	return { originColor, otherColor }
}