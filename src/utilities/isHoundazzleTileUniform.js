import colorUtilities from '../../../../src/utilities/colorUtilities'
import allOrientationsAreTheSame from './allOrientationsAreTheSame'

export default ({ tileColors, options }) => {
	const { allColorsAreTheSame, isTileUniform } = colorUtilities
	return isTileUniform({ tileColors }) &&
		allColorsAreTheSame(options.substripeTexture.tileColors) &&
		allOrientationsAreTheSame({ orientations: options.substripeTexture.tileOrientations })
}
