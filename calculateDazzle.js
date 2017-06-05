import state from '../../state/state'
import gridUtilities from '../../utilities/gridUtilities'
import colorUtilities from '../../utilities/colorUtilities'

export default ({ address }) => {
	const { colorConfig, orientationConfig } = state.colorConfig.houndazzle
	const tileColors = colorUtilities.calculateColorsForTile({ address, colorConfig })
	const tileOrientations = gridUtilities.calculateSetForTile({
		address,
		config: orientationConfig,
		gccOn: state.stripeCountConfig.mode === 'GINGHAM_CHEVRON_CONTINUUM'
	})

	return { tileColors, tileOrientations }
}
