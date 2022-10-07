import { MapView } from '@aws-amplify/ui-react'
import { useEffect, useState } from "react"


/** A map that changes the nodes plotted based on viewstate 
 * 
 * @param {Float} cutoff 
 * @param {List} over 
 * @param {List} under 
 * 
 * @returns a map that scales based on viewport
 */
const ScalingMap = ({ cutoff, over, under }) => {
	const [viewState,setViewState] = useState();
	const [data,setData] = useState(over)

	useEffect(()=>{
		setData(null)
		try{
			if(viewState.zoom > cutoff)
				setData(over)
			else
				setData(under)
		}
		catch(e){
			setData(under)
		}
	},[viewState])

	return(	
        <MapView
            initialViewState={{
                longitude: -100.3381659,
                latitude: 37.615686,
                zoom: 3,
            }}
            onZoomEnd={(e) => {
                setViewState(e.viewState)
            }}
            style={{height:'100%', width:"100%"}}
        >
            {
                data
            }
        </MapView>
	)
}

export default ScalingMap