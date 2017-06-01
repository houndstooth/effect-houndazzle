import state from '../shared/state/state'
import gridUtilities from '../shared/utilities/gridUtilities'
import colorUtilities from '../shared/utilities/colorUtilities'

export default ({ address, initialDazzle }) => {
	const { color, orientation } = state.shared.color.houndazzle
	const colors = colorUtilities.calculateColors({ address, colors: initialDazzle && initialDazzle.colors, color })
	const orientations = initialDazzle && initialDazzle.orientations || gridUtilities.calculateSetForTile({
			address,
			grid: orientation,
			gccOn: state.shared.stripeCountConfig.mode === 'GINGHAM_CHEVRON_CONTINUUM'
		})

	return { colors, orientations }
}