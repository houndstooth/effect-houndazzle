import { Effect } from '../../../src'
import { substripeTexture } from '../pattern'

const houndazzleEffect: Effect = {
	basePattern: {
		textureSettings: {
			executeTexture: substripeTexture,
		},
	},
	name: 'houndazzle',
}

export { houndazzleEffect }
