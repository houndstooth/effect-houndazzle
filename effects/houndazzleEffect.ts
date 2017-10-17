import { Houndstooth } from '../../../src/store'
import { substripeTexture } from '../src'

const houndazzleEffect: Houndstooth = {
	name: 'houndazzle',
	basePattern: {
		textureSettings: {
			renderTexture: substripeTexture,
		},
	},
}

export default houndazzleEffect
