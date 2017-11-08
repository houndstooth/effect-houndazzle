import * as from from '../../../../../src/from'
import { Coordinate } from '../../../../../src/pattern/stripe'
import * as to from '../../../../../src/to'
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
