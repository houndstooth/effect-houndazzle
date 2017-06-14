import colorUtilities from '../../utilities/colorUtilities'
import stripeUtilities from '../../utilities/stripeUtilities'
import houndazzleShapes from '../../effects/houndazzle/houndazzleShapes'
import getDazzle from '../../effects/houndazzle/getDazzle'

export default ({ address, tileColors }) => {
	const tileDazzle = getDazzle({ address })

	const args = { address, tileColors, tileDazzle }

	if (colorUtilities.isTileUniform({ tileColors, tileDazzle })) {
		houndazzleShapes(args)
	} else {
		const stripePositionsForTile = stripeUtilities.getStripePositionsForTile({ address })
		stripePositionsForTile.forEach((stripeStart, stripeIndex) => {
			args.stripeIndex = stripeIndex
			args.stripeCount = stripePositionsForTile.length
			args.coordinatesOptions = { stripeStart, stripeEnd: stripePositionsForTile[ stripeIndex + 1 ] || 2 }
			houndazzleShapes(args)
		})
	}
}
