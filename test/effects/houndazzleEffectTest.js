import executeSelectedHoundstoothEffects from '../../../../src/execute/executeSelectedHoundstoothEffects'
import tileSectorCenterIsColor from '../../../../test/integration/helpers/tileSectorCenterIsColor'
import { BLACK, TRANSPARENT } from '../../../../src/constants'
import houndazzleEffect from '../../effects/houndazzleEffect'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import state from '../../../../src/state'
import resetState from '../../../../src/store/resetState'

describe('houndazzle effect', () => {
	beforeEach(() => resetState(state))

	it('portrays houndstooth using horizontal against vertical striped textures, rather than simply black against white', () => {
		state.selectedHoundstoothEffects = [ houndazzleEffect ]
		const tileSizeInPixels = 200
		const houndstoothOverrides = {
			basePattern: {
				tileSettings: {
					tileSizeSetting: tileSizeInPixels,
				},
				gridSettings: {
					gridSize: 4,
				},
				viewSettings: {
					canvasSize: 800,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const partA = [
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
			],
		]
		const partB = [
			[
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
			],
			[
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
			],
			[
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
			],
			[
				[ 'solid', 'black' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'xxxxx', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
				[ 'solid', 'black' ],
			],
			[
				[ 'xxxxx', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'solid', 'white' ],
				[ 'solid', 'black' ],
				[ 'xxxxx', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
				[ 'solid', 'white' ],
			],
		]
		const topLeftTile = partA.concat(partB)

		const alteratingRow = [
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
			[ 'solid', 'white' ],
			[ 'solid', 'black' ],
		]
		const topRightTile = [
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
		]

		const blackRow = [
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
			[ 'solid', 'black' ],
		]
		const whiteRow = [
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
			[ 'solid', 'white' ],
		]
		const bottomLeftTile = [
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
		]

		const bottomRightTile = partB.concat(partA)

		topLeftTile.forEach((expectedSectorRows, row) => {
			expectedSectorRows.forEach((expectedSector, col) => {
				expectSector({ expectedSector, address: [ col, row ], origin: [ 0, 0 ], tileSizeInPixels })
			})
		})

		topRightTile.forEach((expectedSectorRows, row) => {
			expectedSectorRows.forEach((expectedSector, col) => {
				expectSector({ expectedSector, address: [ col, row ], origin: [ 1, 0 ], tileSizeInPixels })
			})
		})

		bottomLeftTile.forEach((expectedSectorRows, row) => {
			expectedSectorRows.forEach((expectedSector, col) => {
				expectSector({ expectedSector, address: [ col, row ], origin: [ 0, 1 ], tileSizeInPixels })
			})
		})

		bottomRightTile.forEach((expectedSectorRows, row) => {
			expectedSectorRows.forEach((expectedSector, col) => {
				expectSector({ expectedSector, address: [ col, row ], origin: [ 1, 1 ], tileSizeInPixels })
			})
		})
	})
})

const expectSector = ({ expectedSector, address, origin, tileSizeInPixels }) => {
	const sectorType = expectedSector[0]
	const sectorDefiningColor = expectedSector[1] === 'black' ? BLACK : TRANSPARENT

	if (sectorType === 'solid') {
		solid({ origin, address, tileSizeInPixels, color: sectorDefiningColor })
	}
	else if (sectorType === 'xxxxx') {
		minor({ origin, address, tileSizeInPixels, colors: [ sectorDefiningColor, sectorDefiningColor ] })
	}
	else if (sectorType === 'minor') {
		const otherColor = sectorDefiningColor === 'black' ? TRANSPARENT : BLACK
		minor({ origin, address, tileSizeInPixels, colors: [ sectorDefiningColor, otherColor ] })
	}
}

const solid = ({ origin, address, tileSizeInPixels, color }) => {
	const originInPixels = calculateOriginInPixels({ origin, address, tileSizeInPixels })
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels: tileSizeInPixels / 16,
		n: 1,
		x: 0,
		y: 0,
		color,
	})).toBe(true)
}

const minor = ({ origin, address, tileSizeInPixels, colors }) => {
	const originInPixels = calculateOriginInPixels({ origin, address, tileSizeInPixels })
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels: tileSizeInPixels / 16,
		n: 2,
		x: 0,
		y: 0,
		color: colors[ 0 ],
	})).toBe(true)
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels: tileSizeInPixels / 16,
		n: 2,
		x: 1,
		y: 1,
		color: colors[ 1 ],
	})).toBe(true)
}

const calculateOriginInPixels = ({ origin, address, tileSizeInPixels }) => ([
	origin[ 0 ] * tileSizeInPixels + address[ 0 ] * tileSizeInPixels / 16,
	origin[ 1 ] * tileSizeInPixels + address[ 1 ] * tileSizeInPixels / 16,
])
