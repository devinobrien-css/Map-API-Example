import { useState } from "react"
import { Marker, Popup } from "react-map-gl"



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

export default MarkerWithPopup