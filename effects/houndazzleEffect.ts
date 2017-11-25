import { Effect } from '../../../src'
import { substripeTexture } from '../pattern'

const houndazzleEffect: Effect = {
	basePattern: {
		textureSettings: {
			executeTexture: substripeTexture.main,
		},
	},
	name: 'houndazzle',
}

export { houndazzleEffect }
