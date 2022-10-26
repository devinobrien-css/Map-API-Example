import { MapView } from '@aws-amplify/ui-react'
import { useEffect, useState } from "react"
import  { Auth, Geo } from 'aws-amplify'
import Location from 'aws-sdk/clients/location'
import config from "../aws-exports"


// const params = {
//     CalculatorName: window.env.GEO_ROUTER,
//     DeparturePosition: [src.longitude, src.latitude],
//     DestinationPosition: [dst.longitude, dst.latitude],
//     "DepartNow": true,
//     "TravelMode": (travelMode==="walking"?"Walking":"Car"),
//     IncludeLegGeometry: true
// };

export const sample ={
	latitude: 42.814990,
	longitude: -73.946280
}


/** A map that changes the nodes plotted based on viewstate 
 * 
 * @returns a map that scales based on viewport
 */
const HeatMap = () => {

    
    const params = {
        CollectionName: "geofenceCollection-dev",
        DevicePositionUpdates: [
            {
                "DeviceId":"ExampleDevice",
                "Position":[sample.longitude, sample.latitude],
                "SampleTime":(new Date()).toISOString(),
                "Accuracy":{
                    "Horizontal":10.30
                },
                "PositionProperties":{
                    "field1":"value1",
                    "field2":"value2"
                }
            }
        ]
    }

	useEffect(()=>{
		const FetchClusters = async () => {
            console.log('fetching clusters')
            const credentials = await Auth.currentCredentials()
            const client = new Location({
                credentials,
                region: config.aws_project_region,
            })
            console.log(client)


            const clusters =  client.batchEvaluateGeofences(params,null)

            console.log(clusters)

            const fences = await Geo.getGeofence("easternUSA")

            console.log(fences)
            
        }
        FetchClusters();
	},[])

	return(	
        <MapView
            initialViewState={{
                longitude: -100.3381659,
                latitude: 37.615686,
                zoom: 3,
            }}
            style={{height:'100%', width:"100%"}}
        >
        </MapView>
	)
}

export default HeatMap