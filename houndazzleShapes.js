import state from '../../state/state'
import shape from '../../components/shape'
import codeUtilities from '../../utilities/codeUtilities'
import substripeModulus from './substripeModulus'
import getSubstripeCount from './getSubstripeCount'
import substripeOfSquare from './substripeOfSquare'
import substripeOfStripe from './substripeOfStripe'
import colorUtilities from '../../utilities/colorUtilities'
import stripeUtilities from '../../utilities/stripeUtilities'
import getDazzle from '../../effects/houndazzle/getDazzle'

export default ({ address, tileColors }) => {
	const tileDazzle = getDazzle({ address })

	const args = { address, tileColors, tileDazzle }

	if (colorUtilities.isTileUniform({ tileColors, tileDazzle })) {
		substripe(args)
	} else {
		const stripePositionsForTile = stripeUtilities.getStripePositionsForTile({ address })
		stripePositionsForTile.forEach((stripeStart, stripeIndex) => {
			args.stripeIndex = stripeIndex
			args.stripeCount = stripePositionsForTile.length
			args.coordinatesOptions = { stripeStart, stripeEnd: stripePositionsForTile[ stripeIndex + 1 ] || 2 }
			substripe(args)
		})
	}
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
