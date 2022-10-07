import React, { useRef } from "react";
import { MapView,withAuthenticator } from "@aws-amplify/ui-react";
import { useControl, Marker } from "react-map-gl";
import { AmplifyGeofenceControl } from "maplibre-gl-js-amplify";
import "@aws-amplify/ui-react/styles.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl-js-amplify/dist/public/amplify-ctrl-geofence.css";

/** Map with admin geofencing functionality
 * 
 * @param {*} param0 
 * @returns 
 */
const GeoFenceMap = ({ geodata,children }) => {
    const map = useRef()
    function Geofence() {
        useControl(() => new AmplifyGeofenceControl());
            return null;
    }

    return (
        <MapView
            initialViewState={{
                latitude: (geodata.latitude - 0.02),
                longitude: geodata.longitude,
                zoom: 12,
            }}
            style={{height:'100%', width:"100%"}}
        >
            <Geofence style={{position:"absolute",top:0}} position="top"/>
            {
                children
            }
        </MapView>
    );
}
export default withAuthenticator(GeoFenceMap);