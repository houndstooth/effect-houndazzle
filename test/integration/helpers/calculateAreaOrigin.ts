import { Address } from '../../../../../src/components/types/Address'
import { Units } from '../../../../../src/components/types/Units'
import * as from from '../../../../../src/from'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import * as to from '../../../../../src/to'

const calculateAreaOrigin: (_: {
	gridAddress: Address, sectionAddress: Address, sectionResolution: number, tileSize: Units,
}) => Coordinate = ({ gridAddress, sectionAddress, sectionResolution, tileSize }) => to.Coordinate([
	gridAddress[ 0 ] * from.Units(tileSize) + sectionAddress[ 0 ] * from.Units(tileSize) / sectionResolution,
	gridAddress[ 1 ] * from.Units(tileSize) + sectionAddress[ 1 ] * from.Units(tileSize) / sectionResolution,
])

export { calculateAreaOrigin }
