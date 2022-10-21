import {
	MapView,
} from '@aws-amplify/ui-react'
import { Marker } from 'react-map-gl'


const MiniMapEvent = ({ header,geodata,children }) => {
    return (
        <div className="flex flex-col h-96 rounded-xl overflow-hidden dark:bg-gray-600 bg-gray-100 w-fit mx-auto my-2">
            <div className='w-full h-2/3 relative'>
                <div className='absolute z-50'>{header}</div>
                <MapView
                        initialViewState={{
                            longitude: geodata.longitude,
                            latitude: geodata.latitude,
                            zoom: 14,
                        }}
                        style={{height:'100%',width:'100%'}}
                    >
                        <Marker
                            latitude={geodata.latitude}
                            longitude= {geodata.longitude}
                            scale={1.8}
                            color={'blue'}
                        />
                </MapView>
            </div>

            <div className=''>
                {children}
            </div>
        </div>

    )
}

export default MiniMapEvent