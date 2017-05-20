import state from '../../state'

export default ({ originSubstripeDirection }) => {
    const { colorA, colorB } = state.shared
	let colors = []
	colors[ 0 ] = originSubstripeDirection === 'VERTICAL' ? colorB : colorA
	colors[ 1 ] = colors[ 0 ] === colorA ? colorB : colorA

	return colors
}