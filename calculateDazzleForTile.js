import state from '../shared/state/state'
import gridUtilities from '../shared/utilities/gridUtilities'
import colorUtilities from '../shared/utilities/colorUtilities'

export default ({ origin, dazzleColors, dazzleOrientations: initialDazzleOrientations }) => {
	const { color, orientation } = state.shared.color.houndazzle
	dazzleColors = colorUtilities.calculateColors({ origin, colors: dazzleColors, color })
	const dazzleOrientations = initialDazzleOrientations || gridUtilities.calculateSetForTile({
			origin,
			grid: orientation,
			gccOn: state.shared.stripeCount.mode === 'GINGHAM_CHEVRON_CONTINUUM'
		})

	return { dazzleColors, dazzleOrientations }
}