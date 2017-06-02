export default {
	state: {
		shared: {
			gridSize: 8,
			tileSize: 100,
			colorConfig: {
				mode: 'HOUNDAZZLE',
				houndazzle: {
					substripeCount: 16,
					dazzleContinuum: true // probably want to make this an object with { on, initial, delta } too
				}
			}
		}
	},
	iterations: {},
	animations: {}
}