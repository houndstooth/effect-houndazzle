import { NamedEffect } from '../../../src'
import { substripeTexture } from '../pattern'

const houndazzleEffect: NamedEffect = {
	basePattern: {
		textureSettings: {
			executeTexture: substripeTexture.default,
		},
	},
	name: 'houndazzle',
}

export { houndazzleEffect }
