import state from '../../state/state'
import shape from '../../components/shape'
import codeUtilities from '../../utilities/codeUtilities'
import substripeModulus from './substripeModulus'
import getSubstripeCount from './getSubstripeCount'
import substripeOfSquare from './substripeOfSquare'
import substripeOfStripe from './substripeOfStripe'
import getDazzle from '../../effects/houndazzle/getDazzle'
import squareOrStripes from '../../components/squareOrStripes'

export default ({ address, tileColors }) => {
	squareOrStripes({ address, tileColors, shape: substripe, tileDazzle: getDazzle({ address }) })
}

const substripe = ({ address, tileColors, stripeIndex, stripeCount, tileDazzle, coordinatesOptions, getCoordinates }) => {
	const substripeIsOfStripe = !!coordinatesOptions
	getCoordinates = substripeIsOfStripe ? substripeOfStripe : substripeOfSquare

	let { substripeCount, dazzleContinuum } = state.colorConfig.houndazzle
	substripeCount = dazzleContinuum ? getSubstripeCount({ address, stripeIndex, stripeCount }) : substripeCount
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeCount = substripeCount
	coordinatesOptions.orientation = codeUtilities.wrappedIndex({ array: tileDazzle.tileOrientations, index: stripeIndex })

	codeUtilities.iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			address,
			tileColors: substripeModulus({ substripeIndex, nonDazzle: tileColors, dazzle: tileDazzle.tileColors }),
			stripeIndex,
			getCoordinates,
			coordinatesOptions
		})
	})
}
