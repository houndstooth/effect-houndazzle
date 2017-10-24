import { Effect } from '../../../src/store'
import { substripeTexture } from '../src'

const houndazzleEffect: Effect = {
	basePattern: {
		textureSettings: {
			executeTexture: substripeTexture,
		},
	},
	name: 'houndazzle',
}

export { houndazzleEffect }
