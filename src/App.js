import { withAuthenticator } from "@aws-amplify/ui-react"
import RouteMapExample from "./examples/RouteMapExample"
import DirectionsMapExample from "./examples/DirectionsMapExample"
import ScalingMapExample from "./examples/ScalingMapExample"
import LargeMapEventExample from "./examples/LargeMapEventExample"
import SmallMapEventExample from "./examples/SmallMapEventExample"
import JumpToMapExample from "./examples/JumpToMapExample"
import GeoFenceMapExample from "./examples/GeoFenceMapExample"

import { Geo } from 'aws-amplify';
import Map from "./maps/Map"
import { useState } from "react"

const DarkModeToggle = () => {
	return (
		<div className="p-2">
			<button 
				className=""
				onClick={() => {
					const root = document.documentElement.classList
					
					
					if(root.contains('dark')){
						Geo.configure().AmazonLocationService.maps.default="LightModeMap-dev"
						root.remove('dark') 
						console.log(root)
					}
					else{
						Geo.configure().AmazonLocationService.maps.default="DarkModeMap-dev"
						root.add('dark')
						console.log(root)
					}


				}}
			>
				toggle dark mode
			</button>
		</div>
	)
}

function RenderContent(mapChoice){
	if(mapChoice === "test"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Initial Connection Test</p>
				<div className="h-[60vh] w-[80vw]">
					<Map />
				</div>
				<p className="bg-white w-full p-3 border-l-8 rounded border-blue-300 my-2">If this map renders, you've successfully initialized the application!</p>
			</>
		)
	}
	else if(mapChoice === "location"){
		return (
			<>
				<p className='text-4xl dark:text-gray-400 my-2'>Jump To Map Example</p>
				<JumpToMapExample />  
				<p className="bg-white w-full p-3 border-l-8 rounded border-blue-300 my-2">If the search function works, you've successfully enabled searching on the application!</p>
				<p className="bg-gray-100 w-full p-3 border-l-8 rounded border-red-300 my-2 text-red-700">If the search function returns No Results Found, refer to the ReadMe for location map setup</p>
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
	else if(mapChoice === "scaling"){
		return (
			<>
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
				<p className="bg-white w-full p-3 border-l-8 rounded border-blue-300 my-2">If you can add, edit, and delete fences, you've successfully enabled geofencing on the application!</p>
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

	return(	
		<div className='p-4 dark:bg-gray-800 bg-gray-200 h-screen'>
			<p className='text-6xl dark:text-gray-200'>Map Examples Using AmplifyUI</p>
			<p className='text-2xl text-gray-500'>a set of various map tamplates</p>
			<DarkModeToggle />
			<hr /> 
			<div className="flex flex-col absolute right-5 z-[100] md:block md:flex-row group w-min md:no-wrap md:w-full mx-auto overflow-x-scroll rounded-lg shadow-xl bg-white">
				<p 
					onClick={() => {
						setMapChoice("test")
					}}
					className={"text-center hover:bg-gray-200 px-2 md:w-full group-hover:w-full md:w-1/4 cursor-pointer text-lg " + (mapChoice==="test"?"bg-gray-300 font-bold ":"hidden md:block group-hover:block")}>test</p>
				<p 
					onClick={() => {
						setMapChoice("location")
					}}
					className={"text-center hover:bg-gray-200 px-2 md:w-full group-hover:w-full md:w-1/4 cursor-pointer text-lg " + (mapChoice==="location"?"bg-gray-300 font-bold ":"hidden md:block group-hover:block")}>location</p>
				<p 
					onClick={() => {
						setMapChoice("templates")
					}}
					className={"text-center hover:bg-gray-200 px-2 md:w-full group-hover:w-full md:w-1/4 cursor-pointer text-lg " + (mapChoice==="templates"?"bg-gray-300 font-bold ":"hidden md:block group-hover:block")}>templates</p>
				<p 
					onClick={() => {
						setMapChoice("scaling")
					}}
					className={"text-center hover:bg-gray-200 px-2 md:w-full group-hover:w-full md:w-1/4 cursor-pointer text-lg " + (mapChoice==="scaling"?"bg-gray-300 font-bold ":"hidden md:block group-hover:block")}>scaling</p>
				<p 
					onClick={() => {
						setMapChoice("geofence")
					}}
					className={"text-center hover:bg-gray-200 px-2 md:w-full group-hover:w-full md:w-1/4 cursor-pointer text-lg " + (mapChoice==="geofence"?"bg-gray-300 font-bold ":"hidden md:block group-hover:block")}>geofence</p>
				<p 
					onClick={() => {
						setMapChoice("routing")
					}}
					className={"text-center hover:bg-gray-200 px-2 md:w-full group-hover:w-full md:w-1/4 cursor-pointer text-lg " + (mapChoice==="routing"?"bg-gray-300 font-bold ":"hidden md:block group-hover:block")}>routing</p>
			</div>
			<hr /> 
			<div className="">
				{
					RenderContent(mapChoice)
				}
			</div>
		</div>
	)
}
export default withAuthenticator(App)