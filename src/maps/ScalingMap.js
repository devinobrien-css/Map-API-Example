import Map from "./Map"
import { useEffect, useRef, useState } from "react"




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
        <Map viewState={setViewState}>
            {
				data
			}
        </Map>
	)
}

export default ScalingMap