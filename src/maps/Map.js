import { MapView } from '@aws-amplify/ui-react'

/** Map Wrapper
 * 
 * @param {Component} children any child elements to embed within the map
 * @returns 
 */
const Map = ({ children }) => {
    return (
        <MapView
            initialViewState={{
                longitude: -100.3381659,
                latitude: 37.615686,
                zoom: 3,
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