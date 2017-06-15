import combineShapesWithEitherSquareShapeOrStripeShapes from '../../components/combineShapesWithEitherSquareShapeOrStripeShapes'
import substripes from './substripes'
import getDazzle from '../../effects/houndazzle/getDazzle'

export default ({ address, tileColors }) => {
	const shapes = substripes
	combineShapesWithEitherSquareShapeOrStripeShapes({
		address,
		tileColors,
		shapes,
		tileDazzle: getDazzle({ address })
	})
}
