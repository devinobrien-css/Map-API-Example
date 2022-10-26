import { withAuthenticator } from "@aws-amplify/ui-react"
import RouteMapExample from "./examples/RouteMapExample"
import DirectionsMapExample from "./examples/DirectionsMapExample"
import ScalingMapExample from "./examples/ScalingMapExample"
import LargeMapEventExample from "./examples/LargeMapEventExample"
import SmallMapEventExample from "./examples/SmallMapEventExample"
import JumpToMapExample from "./examples/JumpToMapExample"
import GeoFenceMapExample from "./examples/GeoFenceMapExample"
import { Marker, ScaleControl, NavigationControl, GeolocateControl, FullscreenControl, AttributionControl } from "react-map-gl";

import { Geo } from 'aws-amplify';
import Map from "./maps/Map"
import { useEffect, useState } from "react"
import HeatMapExample from "./examples/HeatMapExample"

const DarkModeToggle = () => {
	const [mode,setMode] = useState("light")

	useEffect(()=>{
		const mode = localStorage.getItem("color-mode")
		const root = document.documentElement.classList

		if(mode !== null){
			console.log(mode)
			setMode(mode)

			if(mode === "dark"){
				root.add('dark')
			}
		}
		else{
			localStorage.setItem("color-mode","light")
		}

	},[])


	return (
		<div className="">
			<button 
				className="block mx-auto dark:text-white rounded bg-gray-100 dark:bg-gray-600 p-2"
				onClick={() => {
					const root = document.documentElement.classList
					
					if(mode === "dark"){
						setMode("light")
						localStorage.setItem("color-mode","light")
						root.remove('dark') 

					}
					else{
						setMode("dark")
						localStorage.setItem("color-mode","dark")
						root.add('dark')

					}


				}}
			>
				switch to 
				{
					(mode === "dark" ? " light mode" : " dark mode")
				}
			</button>
		</div>
	)
}

function RenderContent(mapChoice){
	if(mapChoice === "test"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Initial Connection Test</p>
				<div className="h-[60vh] w-full rounded-lg overflow-hidden">
					<Map>
						<FullscreenControl />
						<NavigationControl />
						<ScaleControl />
					</Map>
				</div>
				<p className="bg-white dark:bg-gray-700 dark:text-gray-200 w-full p-3 border-l-8 rounded border-blue-300 my-2">If this map renders, you've successfully initialized the application!</p>
			</>
		)
	}
	else if(mapChoice === "location"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Jump To Map Example</p>
				<JumpToMapExample />  
				<p className="bg-white dark:bg-gray-700 dark:text-gray-200 w-full p-3 border-l-8 rounded border-blue-300 my-2">If the search function works, you've successfully enabled searching on the application!</p>
				<p className="bg-white dark:bg-gray-700 dark:text-gray-200 w-full p-3 border-l-8 rounded border-yellow-300 my-2">Note: click on a JG circle to see an example of a map marker popup</p>
				<p className="bg-gray-100 dark:bg-gray-500 dark:text-red-300 w-full p-3 border-l-8 rounded border-red-400 my-2 text-red-700">If the search function returns No Results Found, refer to the ReadMe for location map setup</p>
			</>
		)
	}
	else if(mapChoice === "templates"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Map Event Example</p>
				<LargeMapEventExample />

				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>List of Map Events Example</p>
				<SmallMapEventExample />
			</>
		)
	}
	else if(mapChoice === "heatmap"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Heat Map Example</p>
				<HeatMapExample />

				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>Scaling Map Example</p>
				<ScalingMapExample />
			</>
		)
	}
	else if(mapChoice === "geofence"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>GeoFence Map Example</p>
				<GeoFenceMapExample />
				<p className="bg-white dark:bg-gray-700 dark:text-gray-200 w-full p-3 border-l-8 rounded border-blue-300 my-2">If you can add, edit, and delete fences, you've successfully enabled geofencing on the application!</p>
			</>
		)
	}
	else if(mapChoice === "routing"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Routing Example </p>
				<RouteMapExample />


				<p className='text-4xl dark:text-gray-400 my-2'>Directions Example </p>
				<DirectionsMapExample />
			</>
		)
	}
	else if(mapChoice === "styling"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Select a New Map</p>
				<p className='text-xl text-gray-500 my-2'>Selecting will reload the page</p>
				{
					Geo.getAvailableMaps().map(map => {
						
						
						return (
							<p
								className="w-4/5 hover:w-10/12 transition-all duration-[600ms] mx-auto my-1 rounded-lg p-4 bg-white dark:bg-gray-600 dark:text-white font-bold cursor-pointer"
								onClick={()=>{
									localStorage.setItem("map-style",map.mapName)
									location.reload()

								}}
							>
								{map.mapName}
							
							</p>
						)
					})
				}
			</>
		)
	}
	else if(mapChoice === "create"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Create Event Example</p>
				<p className='text-xl dark:text-gray-600 my-2'>give metadata, drop pin, drop geofence, notification preferences</p>
			</>
		)
	}
	else{
		return (
			<p>error</p>
		)
	}
}


function App() {
	const [mapChoice,setMapChoice] = useState("test")
	const mapChoices = ['test','location','templates','heatmap','geofence','routing','styling']

	return(	
		<div className='p-4 dark:bg-gray-800 bg-gray-200 min-h-screen'>
			<p className='text-6xl dark:text-gray-200'>Map Examples Using AmplifyUI</p>
			<p className='text-2xl text-gray-500'>a set of various map tamplates</p>
			<DarkModeToggle />

			<div className=" my-2 md:flex md:flex-row right-5 z-[100] group w-min flex-wrap md:w-full mx-auto overflow-x-scroll rounded-lg shadow-xl bg-white dark:bg-gray-600 dark:text-white">
				{
					mapChoices.map(tab => {
						return (
							<p 
								onClick={() => {
									setMapChoice(tab)
								}}
								className={
									"text-center hover:bg-gray-200 px-2 not:md:group-hover:w-full md:w-[14.26%] cursor-pointer text-lg " 
									+ (mapChoice===tab?"bg-gray-300 font-bold text-gray-700 ":"hidden md:block group-hover:block")
								}
							>
								{tab}
							</p>
						)
					})
				}
			</div>

			<div className="">
				{
					RenderContent(mapChoice)
				}
			</div>
		</div>
	)
}
export default withAuthenticator(App)