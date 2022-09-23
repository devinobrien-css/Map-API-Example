import {
	MapView,
    LocationSearch
} from '@aws-amplify/ui-react'
import { useState,useCallback,useRef, Children } from 'react';
import { Marker,Popup } from 'react-map-gl'

function MarkerWithPopup({ latitude, longitude, title, description, image }) {
	const [showPopup, setShowPopup] = useState(false)

	const handleMarkerClick = ({ originalEvent }) => {
		originalEvent.stopPropagation()
		setShowPopup(true)
	}

	return (
		<>
			<Marker
				latitude={latitude}
				longitude={longitude}
				onClick={handleMarkerClick}
			>
                <img src="./jg-logo-pin.png" />
            </Marker>
			{showPopup && (
			<Popup
                latitude={latitude}
                longitude={longitude}
                offset={{ bottom: [0, -40] }}
                onClose={() => setShowPopup(false)}
            >
                <div className='rounded-full'>
                    <img
                        src={"https://via.placeholder.com/80"}
                        alt=""
                        className='rounded-full m-auto'
                    />
                </div>
                <p className='text-2xl'>{title}</p>
                <p>{description}</p>
            </Popup>
			)}
		</>
	)
}



const userLocationData = [
    {
      id: 1,
      title: 'Amplify Team Dinner',
      description:
        "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
      image:
        'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
      longitude: -122.3098577,
      latitude: 47.6248646,
    },
    {
        id: 2,
        title: 'Amplify Team Dinner',
        description:
          "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
        image:
          'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
        longitude: -102.3098577,
        latitude: 47.6248646,
      }
]


const hqLocationData = [
    {
        title:"JG HQ NY",
        latitude: 42.814990,
        longitude: -73.946280
    }
]

const LargeMap = () => {
    const mapRef = useRef();

    return (
        <div className='px-2'>
            <div className="flex flex-col justify-center items-center w-8/12  m-auto rounded-xl overflow-hidden ">
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
                            hqLocationData.map((loc) => (
                                <Marker 
                                    id="main-marker"
                                    latitude={loc.latitude}
                                    longitude={loc.longitude}
                                >
                                    <img src="./jg-pin.png" />
                                </Marker>
                            ))
                        }
                        
                    
                    </MapView>
                </div>
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



            <div className='w-full bg-gray-600 rounded my-2 p-4 flex'>
                <button 
                    className='bg-blue-500 m-auto block px-4 py-2 text-gray-300 rounded-lg uppercase font-bold'
                    onClick={() => {
                        alert('in-progress')
                    }}
                >Add Pin</button>
            </div>
        </div>
    )
}

export default LargeMap;