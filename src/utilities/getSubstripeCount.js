import componentUtilities from '../../../../src/utilities/componentUtilities'

export default ({ gridAddress, stripeIndex, stripeCount }) => {
	const distanceFromZeroZeroAddress = componentUtilities.distanceFromZeroZeroAddress({ gridAddress }) + 1
	const substripeCountPower = Math.floor(distanceFromZeroZeroAddress / 2) + 1
	const houndazzleContinuumScalar = stripeIndex >= stripeCount / 2 ? 2 : 1
	return Math.pow(2, substripeCountPower) * houndazzleContinuumScalar
}
