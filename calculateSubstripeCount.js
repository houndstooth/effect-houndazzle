export default ({ address }) => {
	return Math.pow(
		2,
		Math.floor(
			(
				address.reduce(
					(a, b) => a + b,
					0
				) + 1
			) / 2
		) + 1
	)
}