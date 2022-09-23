import {
	MapView,
} from '@aws-amplify/ui-react'
import { useState,useCallback,useRef, Children, useEffect } from 'react';
import { Marker,Popup } from 'react-map-gl'






const MapEventSection = ({ header,geodata,children }) => {
    return (
        <div className="flex flex-row h-96 rounded-xl overflow-hidden dark:bg-gray-600 bg-gray-300 w-10/12 m-auto">
            <div className='w-1/2 relative'>
                <div className='absolute z-50'>{header}</div>
                <MapView
                        initialViewState={{
                            longitude: geodata.longitude,
                            latitude: geodata.latitude,
                            zoom: 12,
                        }}
                        style={{height:'100%',width:'100%'}}
                    >
                        <Marker
                            latitude={geodata.latitude}
                            longitude= {geodata.longitude}
                            scale={1.8}
                        />
                </MapView>
            </div>

            <div className='w-1/2'>
                {children}
            </div>
        </div>

    )
}

export default MapEventSection