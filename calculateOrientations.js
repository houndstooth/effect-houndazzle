import state from '../shared/state/state'

export default ({ origin }) => {
    const { orientations, orientationAssignment } = state.shared.color.houndazzle.orientation
    const { offset, mode, supertile, weave } = orientationAssignment

    if (mode === 'WEAVE') {
        const { rows, columns } = weave
        return [
            orientations[ columns[ Math.abs((origin[ 0 ] + offset[ 0 ]) % columns.length) ] ],
            orientations[ rows[ Math.abs((origin[ 1 ] + offset[ 1 ]) % rows.length) ] ]
        ]
    } else if (mode === 'SUPERTILE') {
        const supertileWidth = supertile.length
        const supertileHeight = supertile[ 0 ].length
        let x = origin[ 0 ] + offset[ 0 ]
        let y = origin[ 1 ] + offset[ 1 ]
        const entry = supertile[ Math.abs(x % supertileWidth) ][ Math.abs(y % supertileHeight) ]
        return entry.map(index => orientations[ index ])
    }
}