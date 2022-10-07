import { withAuthenticator } from "@aws-amplify/ui-react"
import RouteMapExample from "./examples/RouteMapExample"
import DirectionsMapExample from "./examples/DirectionsMapExample"
import ScalingMapExample from "./examples/ScalingMapExample"
import LargeMapEventExample from "./examples/LargeMapEventExample"
import SmallMapEventExample from "./examples/SmallMapEventExample"
import JumpToMapExample from "./examples/JumpToMapExample"
import GeoFenceMapExample from "./examples/GeoFenceMapExample"
import { Geo } from 'aws-amplify';

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

function App() {
	return(	
		<div className='p-4 dark:bg-gray-800 bg-gray-200'>
			<p className='text-6xl dark:text-gray-200'>Map Examples Using AmplifyUI</p>
			<p className='text-2xl text-gray-500'>a set of various map tamplates</p>
			<hr /> 
			<DarkModeToggle />
			<hr /> 
			<div className="w-10/12 m-auto">

				<p className='text-4xl dark:text-gray-400 my-2'>Jump To Map Example</p>
				<JumpToMapExample />  

				<br/>
				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>Map Event Example</p>
				<LargeMapEventExample />

				<br/>
				<br/>


				<p className='text-4xl dark:text-gray-400 my-2'>List of Map Events Example</p>
				<SmallMapEventExample />

				<br/>
				<br/>
				
				<p className='text-4xl dark:text-gray-400 my-2'>Scaling Map Example</p>
				<ScalingMapExample />

				<br/>
				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>GeoFence Map Example</p>
				<GeoFenceMapExample />

				<br/>
				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>Routing Example </p>
				<RouteMapExample />

				<br/>
				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>Directions Example </p>
				<DirectionsMapExample />

				<br/>
				<br/>

				<p className='text-4xl dark:text-gray-400 my-2'>Create Event Example</p>
				<p className='text-xl dark:text-gray-600 my-2'>give metadata, drop pin, drop geofence, notification preferences</p>
			</div>
		</div>
	)
}
export default withAuthenticator(App)