import { useState, useEffect } from "react";
import { Source, Layer } from "react-map-gl";
import config from './../aws-exports'
import Location from 'aws-sdk/clients/location'
import  { Auth } from 'aws-amplify'
import * as turf from '@turf/turf'

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
 * @param {JSON} dst 
 * @param {String} uid 
 * @param {String} travelMode 
 * 
 * @returns 
 */
const PlotRoute =  ({src,dst,uid,travelMode}) => {
    const [route, setRoute] = useState(turf.featureCollection([]))

    const params = {
        CalculatorName: window.env.GEO_ROUTER,
        DeparturePosition: [src.longitude, src.latitude],
        DestinationPosition: [dst.longitude, dst.latitude],
        "DepartNow": true,
        "TravelMode": (travelMode==="walking"?"Walking":"Car"),
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

            console.log(leg_data.Legs)
            console.log(leg_data.Summary.DurationSeconds/60)
            console.log(leg_data.$response)

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

export default PlotRoute;