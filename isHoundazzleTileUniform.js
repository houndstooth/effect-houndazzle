import colorUtilities from '../../utilities/colorUtilities'
import allOrientationsAreTheSame from './allOrientationsAreTheSame'

export default ({ tileColors, tileDazzle }) => {
	const { allColorsAreTheSame, isTileUniform } = colorUtilities
	return isTileUniform({ tileColors }) &&
		allColorsAreTheSame({ colors: tileDazzle.tileColors }) &&
		allOrientationsAreTheSame({ orientations: tileDazzle.tileOrientations })
}
