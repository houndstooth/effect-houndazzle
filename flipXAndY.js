export default ({ coordinates, shapeOrigin }) => {
	return coordinates.map(coordinate => {
		const relativeX = coordinate[ 0 ] - shapeOrigin[ 0 ]
		const relativeY = coordinate[ 1 ] - shapeOrigin[ 1 ]
		return [ shapeOrigin[ 0 ] + relativeY, shapeOrigin[ 1 ] + relativeX ]
	})
}
