export default ({distanceFromOrigin}) => {
	return Math.pow(
		2,
		Math.floor(
			(
				distanceFromOrigin + 1
			) / 2
		) + 1
	)
}