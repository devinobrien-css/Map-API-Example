import { useState, useEffect } from "react";
import { Source, Layer } from "react-map-gl";
import config from '../aws-exports'
import Location from 'aws-sdk/clients/location'
import  { Auth, Geo } from 'aws-amplify'
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
const PlotRouteWithDetail =  ({src,dst}) => {
    const [travelMode,setTravelMode] = useState('driving')
    const [route, setRoute] = useState(turf.featureCollection([]))

    const [minuteEstimate,setMinuteEstimate] = useState()
    const [hourEstimate,setHourEstimate] = useState()
    const [source,setSource] = useState()
    const [destination,setDestination] = useState()


    const TravelOptions = () => {
        return (
            <>
                <div className="bg-gray-300 rounded overflow-hidden flex cursor-pointer w-min mx-auto my-2">
                    <p 
                        className={
                            "transition-all p-2 font-bold " + (
                                travelMode==="driving"?
                                "bg-gray-400 "
                                :""
                                )} 
                        onClick={() => {
                            setTravelMode("driving")
                        }}
                    >Driving</p>
                    <p 
                        className={
                            "transition-all p-2 font-bold " + (
                                travelMode==="walking"?
                                "bg-gray-400 "
                                :""
                                )} 
                        onClick={() => {
                            setTravelMode("walking")
                        }}
                    >Walking</p>
                </div>
            </>
        )
    }

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

            console.log(leg_data)
            setSource((await Geo.searchByCoordinates(leg_data.Legs[0].StartPosition)).label)
            setDestination((await Geo.searchByCoordinates(leg_data.Legs[0].EndPosition)).label)


            var date = new Date(null);
            date.setSeconds(leg_data.Summary.DurationSeconds); // specify value for SECONDS here
            const [hours,mins,secs] = date.toISOString().split('T')[1].split(':')
            
            console.log("--------")
            setHourEstimate(hours)
            setMinuteEstimate(mins)
            var result = date.getMinutes()
            var result = date.getHours()


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
    },[travelMode])
    
    return (
        <>
            <div className="absolute">
                <div className="bg-gray-100 rounded p-2">
                    <div>
                        <p className="capitalize text-lg">{travelMode} Directions</p>
                        <div
                            className="flex "
                        >
                            <p className="">To: </p>
                            <p className="px-2 text-blue-600">{source}</p>
                        </div>
                        <div
                            className="flex "
                        >
                            <p className="">From:</p>
                            <p className="px-2 text-blue-600">{destination}</p>
                        </div>
                        <div className="flex no-wrap">
                            <p className="pr-2">Travel Time: </p>
                            <p className="text-blue-500 pr-1">
                            {
                                (hourEstimate > 1 ? parseInt(hourEstimate, 10)+"hrs" : "")
                            } 
                            {
                                (hourEstimate === 1 ? "1hr" : "")
                            }
                            </p>
                            <p className="text-blue-500">{minuteEstimate} mins</p>
                        </div>
                    </div>
                </div>
                <TravelOptions />
            </div>
            <Source id={"routeLine"} type="geojson" data={route}>
                <Layer {...ROUTE_LAYER} />
            </Source>
        </>
    )
}

export default PlotRouteWithDetail;