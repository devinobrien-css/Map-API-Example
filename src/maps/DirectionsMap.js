import { Marker, ScaleControl, NavigationControl, GeolocateControl, FullscreenControl, AttributionControl, Source, Layer } from "react-map-gl";
import { MapView } from '@aws-amplify/ui-react';
import PlotRouteWithDetail from "./PlotRouteWithDetail";
import { useState } from "react";

/** Builds a map with directions between two points
 * 
 * @param {JSON} src 
 * @param {JSON} dst
 * 
 * @returns 
 */
const DirectionsMap = ({src,dst}) => {
    return (
        <MapView
            initialViewState={{
                longitude: src.longitude,
                latitude: src.latitude,
                zoom:12
            }}
            style={{height:'100%', width:"100%"}}
        >
            <Marker 
                latitude={src.latitude}
                longitude={src.longitude}
                color={"blue"}
            />
            <Marker 
                latitude={dst.latitude}
                longitude={dst.longitude}
                color={"red"}

            />
            <PlotRouteWithDetail  src={src} dst={dst} />
        </MapView>
    )
}
export default DirectionsMap