import colorUtilities from '../../utilities/colorUtilities'
import allOrientationsAreTheSame from './allOrientationsAreTheSame'

export default ({ tileColors, options }) => {
	const { allColorsAreTheSame, isTileUniform } = colorUtilities
	return isTileUniform({ tileColors }) &&
		allColorsAreTheSame({ colors: options.tileDazzle.tileColors }) &&
		allOrientationsAreTheSame({ orientations: options.tileDazzle.tileOrientations })
}
