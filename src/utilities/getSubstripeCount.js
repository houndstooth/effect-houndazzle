export default ({ gridAddress, stripeIndex, stripeCount }) => {
	const houndazzleContinuumScalar = stripeIndex >= stripeCount / 2 ? 2 : 1
	return Math.pow(
			2,
			Math.floor(
				(
					gridAddress.reduce(
						(a, b) => a + b,
						0,
					) + 1
				) / 2,
			) + 1,
		) * houndazzleContinuumScalar
}
