import {
	MapView,
    LocationSearch
} from '@aws-amplify/ui-react'
import { useRef } from 'react';
import { Marker } from 'react-map-gl'
import { HQ_geodata, JGHQNY_geodata, userLocationData } from '../data/geodata';
import MarkerWithPopup from '../maps/MarkerWithPopup';

const JumpToMapExample = () => {
    const mapRef = useRef();

    return (
        <>
                <div className="h-[500px] w-full">
                    <MapView
                        initialViewState={{
                            longitude: -100.3381659,
                            latitude: 37.615686,
                            zoom: 3,
                        }}
                        style={{height:'100%',width:'100%'}}
                        ref={mapRef}
                    >
                        <LocationSearch position="top-left" />
                        {
                            userLocationData.map((loc) => (
                                <MarkerWithPopup
                                    key={loc.id}
                                    latitude={loc.latitude}
                                    longitude={loc.longitude}
                                    title={loc.title}
                                    description={loc.description}
                                />
                            ))
                        }
                        {
                            HQ_geodata.map((loc,index) => (
                                <Marker 
                                    key={'marker-'+index+'-'+""}
                                    latitude={loc.latitude}
                                    longitude={loc.longitude}
                                >
                                    <img src="./jg-pin.png" />
                                </Marker>
                            ))
                        }
                    </MapView>

            </div>
            <div className='w-full bg-gray-600 rounded my-2 p-4 flex'>
                <button 
                    className='bg-blue-500 m-auto block px-4 py-2 text-gray-300 rounded-lg uppercase font-bold'
                    onClick={() => {
                        mapRef.current.flyTo({
                            center: [ -100.3381659,37.615686], 
                            zoom: 3
                        });
                    }}
                >Reset Map</button>
                <button 
                    className='bg-blue-500 m-auto block px-4 py-2 text-gray-300 rounded-lg uppercase font-bold'
                    onClick={() => {
                        mapRef.current.flyTo({
                            center: [ -73.946280,42.814990], 
                            zoom: 15 
                        });
                    }}
                >jump to NY</button>
                <button 
                    className='bg-blue-500 m-auto block px-4 py-2 text-gray-300 rounded-lg uppercase font-bold'
                    onClick={() => {
                        
                        mapRef.current.flyTo({ center: [172.78, 42.28], zoom: 5 });
                    }}
                >jump to Texas</button>
                <button 
                    className='bg-blue-500 m-auto block px-4 py-2 text-gray-300 rounded-lg uppercase font-bold'
                    onClick={() => {
                        mapRef.current.flyTo({ center: [172.78, 2.28], zoom: 5 });
                    }}
                >jump to California</button>
                <div></div>
            </div>
        </>
    )
}

export default JumpToMapExample;