import { Address } from '../../../../../src/components/types/Address'
import { Unit } from '../../../../../src/components/types/Unit'
import * as from from '../../../../../src/from'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import * as to from '../../../../../src/to'

const calculateAreaOrigin: (_: {
	gridAddress: Address, sectionAddress: Address, sectionResolution: number, tileSize: Unit,
}) => Coordinate = ({ gridAddress, sectionAddress, sectionResolution, tileSize }) => to.Coordinate([
	gridAddress[ 0 ] * from.Unit(tileSize) + sectionAddress[ 0 ] * from.Unit(tileSize) / sectionResolution,
	gridAddress[ 1 ] * from.Unit(tileSize) + sectionAddress[ 1 ] * from.Unit(tileSize) / sectionResolution,
])

export { calculateAreaOrigin }
