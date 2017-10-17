import { Houndstooth } from '../../../src/store'
import { substripeTexture } from '../src'

const houndazzleEffect: Houndstooth = {
	basePattern: {
		textureSettings: {
			renderTexture: substripeTexture,
		},
	},
	name: 'houndazzle',
}

export default houndazzleEffect
