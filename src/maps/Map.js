import {
	MapView,
    useMap
} from '@aws-amplify/ui-react'
import { useEffect, useRef } from 'react';

/** Map Wrapper
 * 
 * @param {Component} children 
 * @returns 
 */
const Map = ({ viewState,children }) => {
    return (
            <MapView
                initialViewState={{
                    longitude: -100.3381659,
                    latitude: 37.615686,
                    zoom: 3,
                }}
                onZoomEnd={(e) => {
                    viewState(e.viewState)
                    console.log(e.viewState)
                }}
                style={{height:'100%', width:"100%"}}
            >
                {
                    children
                }
            </MapView>

    )


}

export default Map