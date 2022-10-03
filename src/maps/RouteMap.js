import  Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import Location from 'aws-sdk/clients/location'
import { useEffect, useState } from 'react'
import ReactMapGL,{ useControl, Marker, ScaleControl, NavigationControl, GeolocateControl, FullscreenControl, AttributionControl, Source, Layer } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import config from './../aws-exports'
import { MapView } from '@aws-amplify/ui-react';
import * as turf from '@turf/turf'

const MAP = "mapexampled81546fb"
const PLACE_INDEX = "MapPlaceIndex"
const ROUTER = "MapRouter"



const PlotRoute =  ({src,dst,uid}) => {
    const [route, setRoute] = useState(turf.featureCollection([]))

    const params = {
        CalculatorName: ROUTER,
        DeparturePosition: [src.longitude, src.latitude],
        DestinationPosition: [dst.longitude, dst.latitude],
        IncludeLegGeometry: true
    };
    
    useEffect(() => {
        const FetchRoute = async () => {
            // construct authorized client for request
            const credentials = await Auth.currentCredentials()
            const client = new Location({
                credentials,
                region: config.aws_project_region,
            })

            // retrieve leg data of route
            const leg_data = await client.calculateRoute(params).promise();
            const route = leg_data.Legs.map(leg => {
                const geom = leg.Geometry;
        
                const { Geometry, StartPosition, EndPosition, Steps, ...properties } = leg;
        
                return turf.feature(
                    {
                        type: Object.keys(geom)[0],
                        coordinates: Object.values(geom)[0]
                    },
                    properties
                );
            })
            console.log(turf.featureCollection(route))
            setRoute(turf.featureCollection(route))
        }
        FetchRoute()
    },[])
    

    return (
        <Source id={"routeLine" + uid} type="geojson" data={route}>
            <Layer {...ROUTE_LAYER} />
        </Source>
    )
}

const INITIAL_VIEWPORT = {
    longitude: -56.164532,
    latitude: -34.901112,
    zoom:10
}

const ROUTE_LAYER = {
    type:"line",
    layout: {
        "line-join": "round"
    },
    paint:{
        "line-color": "blue",
        "line-width": 3
    }
}

/**
 * 
 * @param {JSON} src 
 * @param {[JSON]} dst_Set
 * @returns 
 */
const RouteMap = ({src,dst_set}) => {
    const [viewport, setViewport] = useState({
        longitude: INITIAL_VIEWPORT.longitude,
        latitude: INITIAL_VIEWPORT.latitude,
        zoom: 13,
    });

    console.log(dst_set)
   
    return (
        <div className='h-[500px]'>
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
                                    key={"dst"+index}
                                    latitude={dst.latitude}
                                    longitude={dst.longitude}
                                />
                                <PlotRoute  src={src} dst={dst} uid={"-route"+index}/>
                            </>
                        )
                    })
                }
            </MapView>
        </div>
    )
}

export default RouteMap