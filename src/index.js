import React from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify, Geo, Auth } from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react'
import App, { InitialTest } from './App'
import config from './aws-exports'
import './index.css'
import '@aws-amplify/ui-react/styles.css'
import "maplibre-gl/dist/maplibre-gl.css";

// configure amplify app
Amplify.configure(config)

console.log(Amplify)
console.log(Geo)



async function view_credentials(){
	console.log(await Auth.currentUserInfo())
}
view_credentials()


// configure map colorway
// const availableMaps =  Geo.getAvailableMaps(); // all map colors
// Geo.configure().AmazonLocationService.maps.default="DarkModeMap-dev" // set to light mode

// render content
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<AmplifyProvider>
		<App/>
	</AmplifyProvider>
)