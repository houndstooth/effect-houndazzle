import { Coordinate } from '../../../../../src/space'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'
import { AreaOriginParams } from './types'

const calculateAreaOrigin: (_: AreaOriginParams) => Coordinate =
	({ gridAddress, sectionAddress, sectionResolution, tileSize }: AreaOriginParams): Coordinate => {
		const [ gridX, gridY ]: number[] = from.Address(gridAddress)
		const [ sectionX, sectionY ]: number[] = from.Address(sectionAddress)
		const size: number = from.Unit(tileSize)

		return to.Coordinate([
			gridX * size + sectionX * size / sectionResolution,
			gridY * size + sectionY * size / sectionResolution,
		])
	}

export { calculateAreaOrigin }
