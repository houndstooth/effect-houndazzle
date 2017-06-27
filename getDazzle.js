import gridUtilities from '../../utilities/gridUtilities'
import colorUtilities from '../../utilities/colorUtilities'

export default ({ address }) => {
	const { colorConfig, orientationConfig } = settings.initial.colorConfig.houndazzle
	const tileColors = colorUtilities.getColorsForTile({ address, colorConfig })
	const tileOrientations = gridUtilities.getSetForTile({
		address,
		config: orientationConfig
	})

	return { tileDazzle: { tileColors, tileOrientations } }
}
