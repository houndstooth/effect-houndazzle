import componentUtilities from '../../../../src/utilities/componentUtilities'
import colorUtilities from '../../../../src/utilities/colorUtilities'
import store from '../../../../store'

export default ({ address }) => {
	const { colorSettings, orientationSettings } = store.currentState.builtPattern.base.colorSettings.houndazzle
	const tileColors = colorUtilities.getColorsForTile({ address, colorSettings })
	const tileOrientations = componentUtilities.getSetForTile({
		address,
		settings: orientationSettings,
	})

	return { tileDazzle: { tileColors, tileOrientations } }
}
