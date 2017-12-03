import { NamedEffect } from '../../../src'
import { substripeTexture } from '../pattern'
import HOUNDAZZLE_DESCRIPTION from './houndazzleDescription'

const houndazzleEffect: NamedEffect = {
	basePattern: {
		textureSettings: {
			executeTexture: substripeTexture.default,
		},
	},
	description: HOUNDAZZLE_DESCRIPTION,
	name: 'houndazzle',
}

export { houndazzleEffect }
