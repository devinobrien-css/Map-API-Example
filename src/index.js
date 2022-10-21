import React from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify, Geo, Auth } from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react'
import App from './App'
import config from './aws-exports'
import './index.css'

Amplify.configure(config)

/** Displays general information on the current session
 */
async function view_credentials(){
	console.log(Geo)
	console.log(Geo.getAvailableMaps())
	console.log(Amplify)
	console.log(await Auth.currentUserInfo())
}


view_credentials();



const map_style = localStorage.getItem("map-style")
if(map_style === null)
	localStorage.setItem("map-style",Geo.getAvailableMaps()[0].mapName)

console.log(localStorage.getItem("map-style"))

Geo.configure().AmazonLocationService.maps.default=localStorage.getItem("map-style")

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<AmplifyProvider>
		<App/>
	</AmplifyProvider>
)