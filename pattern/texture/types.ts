import { ColorOptions, Unit } from '../../../../src'

interface SubstripeOutlineParams {
	substripeCount: number,
	substripeIndex: number,
	tileSize: Unit,
}

interface SubstripeParams extends SubstripeOutlineParams, ColorOptions {
}

export { SubstripeParams, SubstripeOutlineParams }
