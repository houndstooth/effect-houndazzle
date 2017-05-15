import render from '../../shared/render/render'
import { UNIT, COLOR_A, COLOR_B } from '../../shared/common/customize'
import scaleOrigin from '../../shared/utilities/scaleOrigin'
import iterator from '../../shared/utilities/iterator'

export default ({ origin, size, originSubstripeDirection, scaleFromCenter, substripeCount }) => {
    // origin = scaleOrigin({ origin, scaleFromCenter })
    // const sizedUnit = UNIT * size
	//
    // iterator(substripeCount).forEach(substripe => {
    //     const color = substripe % 2 == 0 ? COLOR_A : COLOR_B
    //     let coordinates
    //     if (originSubstripeDirection == 'VERTICAL') {
    //         coordinates = [
    //             [
    //                 origin[ 0 ] + substripe * sizedUnit / substripeCount ,
    //                 origin[ 1 ]
    //             ],
    //             [
    //                 origin[ 0 ] + (substripe + 1) * sizedUnit / substripeCount ,
    //                 origin[ 1 ]
    //             ],
    //             [
    //                 origin[ 0 ] + (substripe + 1) * sizedUnit / substripeCount ,
    //                 origin[ 1 ] + sizedUnit
    //             ],
    //             [
    //                 origin[ 0 ] + substripe * sizedUnit / substripeCount,
    //                 origin[ 1 ] + sizedUnit
    //             ]
    //         ]
    //     } else {
    //         coordinates = [
    //             [
    //                 origin[ 0 ] ,
    //                 origin[ 1 ] + substripe * sizedUnit / substripeCount
    //             ],
    //             [
    //                 origin[ 0 ] ,
    //                 origin[ 1 ] + (substripe + 1) * sizedUnit / substripeCount
    //             ],
    //             [
    //                 origin[ 0 ] + sizedUnit,
    //                 origin[ 1 ] + (substripe + 1) * sizedUnit / substripeCount
    //             ],
    //             [
    //                 origin[ 0 ] + sizedUnit,
    //                 origin[ 1 ] + substripe * sizedUnit / substripeCount
    //             ]
    //         ]
    //     }
	//
    //     render({ color, coordinates })
    // })
}