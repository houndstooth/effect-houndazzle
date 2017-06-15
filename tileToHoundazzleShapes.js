import combineShapesWithEitherSquareShapeOrStripeShapes from '../../components/combineShapesWithEitherSquareShapeOrStripeShapes'
import substripes from './substripes'
import getDazzle from '../../effects/houndazzle/getDazzle'

export default ({ address, tileColors, tileOrigin, sizedUnit }) => {
	const shapes = substripes
	combineShapesWithEitherSquareShapeOrStripeShapes({
		address,
		tileColors,
		shapes,
		tileOrigin,
		sizedUnit,
		tileDazzle: getDazzle({ address })
	})
}
