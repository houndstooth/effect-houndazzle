import { Coordinate, from, to } from '../../../../../src/indexForTest'

import { AreaOriginParams } from './types'

const calculateAreaOrigin: (_: AreaOriginParams) => Coordinate =
	({ address, sectionAddress, sectionResolution, tileSize }: AreaOriginParams): Coordinate => {
		const [ gridX, gridY ]: number[] = from.Address(address)
		const [ sectionX, sectionY ]: number[] = from.Address(sectionAddress)
		const size: number = from.Unit(tileSize)

		return to.Coordinate([
			gridX * size + sectionX * size / sectionResolution,
			gridY * size + sectionY * size / sectionResolution,
		])
	}

export default calculateAreaOrigin
