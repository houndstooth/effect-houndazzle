import componentUtilities from '../../../../src/utilities/componentUtilities'
import colorUtilities from '../../../../src/utilities/colorUtilities'

export default ({ address }) => {
	const { colorSettings, orientationSettings } = current.settings.initial.colorSettings.houndazzle
	const tileColors = colorUtilities.getColorsForTile({ address, colorSettings })
	const tileOrientations = componentUtilities.getSetForTile({
		address,
		settings: orientationSettings,
	})

	return { tileDazzle: { tileColors, tileOrientations } }
}
