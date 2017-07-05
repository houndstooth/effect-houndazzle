import gridUtilities from '../../../../src/utilities/gridUtilities'
import colorUtilities from '../../../../src/utilities/colorUtilities'

export default ({ address }) => {
	const { colorSettings, orientationSettings } = settings.initial.colorSettings.houndazzle
	const tileColors = colorUtilities.getColorsForTile({ address, colorSettings })
	const tileOrientations = gridUtilities.getSetForTile({
		address,
		settings: orientationSettings,
	})

	return { tileDazzle: { tileColors, tileOrientations } }
}
