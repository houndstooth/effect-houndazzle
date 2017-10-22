import { Address } from '../../../../../src/components/types/Address'
import { Unit } from '../../../../../src/components/types/Unit'
import { Coordinate } from '../../../../../src/space/types/Coordinate'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'

const calculateAreaOrigin: (_: {
	gridAddress: Address[], sectionAddress: Address[], sectionResolution: number, tileSize: Unit,
}) => Coordinate = ({ gridAddress, sectionAddress, sectionResolution, tileSize }) => {
	const [ gridX, gridY ] = from.Address(gridAddress)
	const [ sectionX, sectionY ] = from.Address(sectionAddress)
	const size = from.Unit(tileSize)

	return to.Coordinate([
		gridX * size + sectionX * size / sectionResolution,
		gridY * size + sectionY * size / sectionResolution,
	])
}

export { calculateAreaOrigin }
