import componentUtilities from '../../../../src/utilities/componentUtilities'
import colorUtilities from '../../../../src/utilities/colorUtilities'
import store from '../../../../store'

export default ({ gridAddress }) => {
	const { colorSettings, orientationSettings } = store.mainHoundstooth.basePattern.colorSettings.substripeTextureSettings
	const tileColors = colorUtilities.getColorsForTile({ gridAddress, colorSettings })
	const tileOrientations = componentUtilities.getSetForTile({
		gridAddress,
		settings: orientationSettings,
	})

	return { substripeTexture: { tileColors, tileOrientations } }
}
