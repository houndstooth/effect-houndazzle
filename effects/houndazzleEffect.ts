import { Effect } from '../../../src/store'
import { substripeTexture } from '../src'

const houndazzleEffect: Effect = {
	basePattern: {
		textureSettings: {
			renderTexture: substripeTexture,
		},
	},
	name: 'houndazzle',
}

export { houndazzleEffect }
