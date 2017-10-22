import { Address } from '../../../../../src/components/types/Address'
import { Unit } from '../../../../../src/components/types/Unit'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'

const calculateAreaOrigin: (_: {
	gridAddress: Address, sectionAddress: Address, sectionResolution: number, tileSize: Unit,
}) => Coordinate = ({ gridAddress, sectionAddress, sectionResolution, tileSize }) => to.Coordinate([
	gridAddress[ 0 ] * from.Unit(tileSize) + sectionAddress[ 0 ] * from.Unit(tileSize) / sectionResolution,
	gridAddress[ 1 ] * from.Unit(tileSize) + sectionAddress[ 1 ] * from.Unit(tileSize) / sectionResolution,
])

export { calculateAreaOrigin }
