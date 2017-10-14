import { substripeTexture } from '../src'
import { Houndstooth } from '../../../src/store'

const houndazzleEffect: Houndstooth = {
	name: 'houndazzle',
	basePattern: {
		textureSettings: {
			renderTexture: substripeTexture,
		},
	},
}

export default houndazzleEffect
