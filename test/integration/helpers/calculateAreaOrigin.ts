import { Address, Unit } from '../../../../../src/components'
import { Coordinate } from '../../../../../src/space'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'

const calculateAreaOrigin: (_: {
	gridAddress: Address, sectionAddress: Address, sectionResolution: number, tileSize: Unit,
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
