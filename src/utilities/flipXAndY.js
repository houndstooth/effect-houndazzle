export default ({ coordinates, tileOrigin }) => {
	return coordinates.map(coordinate => {
		const relativeX = coordinate[ 0 ] - tileOrigin[ 0 ]
		const relativeY = coordinate[ 1 ] - tileOrigin[ 1 ]
		return [ tileOrigin[ 0 ] + relativeY, tileOrigin[ 1 ] + relativeX ]
	})
}
