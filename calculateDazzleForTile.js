import state from '../shared/state/state'
import gridUtilities from '../shared/utilities/gridUtilities'
import colorUtilities from '../shared/utilities/colorUtilities'

export default ({ origin, initialDazzle }) => {
	const { color, orientation } = state.shared.color.houndazzle
	const colors = colorUtilities.calculateColors({ origin, colors: initialDazzle && initialDazzle.colors, color })
	const orientations = initialDazzle && initialDazzle.orientations || gridUtilities.calculateSetForTile({
			origin,
			grid: orientation,
			gccOn: state.shared.stripeCount.mode === 'GINGHAM_CHEVRON_CONTINUUM'
		})

	return { colors, orientations }
}