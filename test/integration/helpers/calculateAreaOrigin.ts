import Address from '../../../../../src/components/types/Address'
import Units from '../../../../../src/components/types/Units'
import Coordinate from '../../../../../src/space/types/Coordinate'

const calculateAreaOrigin: {
	({}: { gridAddress: Address, sectionAddress: Address, sectionResolution: number, tileSize: Units }): Coordinate,
} = ({ gridAddress, sectionAddress, sectionResolution, tileSize }) => {
	const tileSizeDowncast = tileSize as any

	return [
		gridAddress[ 0 ] * tileSizeDowncast + sectionAddress[ 0 ] * tileSizeDowncast / sectionResolution as any,
		gridAddress[ 1 ] * tileSizeDowncast + sectionAddress[ 1 ] * tileSizeDowncast / sectionResolution as any,
	] as Coordinate
}

export default calculateAreaOrigin
