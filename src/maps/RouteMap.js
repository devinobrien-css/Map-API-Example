import { useState } from 'react'
import { useControl, Marker, ScaleControl, NavigationControl, GeolocateControl, FullscreenControl, AttributionControl, Source, Layer } from "react-map-gl";
import { MapView } from '@aws-amplify/ui-react';
import PlotRoute from './PlotRoute';

const INITIAL_VIEWPORT = {
    longitude: -56.164532,
    latitude: -34.901112,
    zoom:10
}

/** Plots a map with one or many routes plotted
 * 
 * @param {JSON} src 
 * @param {[JSON]} dst_Set
 * @returns a map with routes plotted
 */
const RouteMap = ({src,dst_set}) => {
    return (
        <MapView
            initialViewState={{
                longitude: src.longitude,
                latitude: src.latitude,
                zoom:13
            }}
            style={{height:'100%', width:"100%"}}
        >
            <Marker 
                latitude={src.latitude}
                longitude={src.longitude}
                color={"red"}
            />
            {
                dst_set.map((dst,index) => {
                    return (
                        <>
                            <Marker 
                                latitude={dst.latitude}
                                longitude={dst.longitude}
                            />
                            <PlotRoute  src={src} dst={dst} uid={"-route"+index}/>
                        </>
                    )
                })
            }
        </MapView>
    )
}

export default RouteMap