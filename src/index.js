import React from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify, Auth, Geo } from 'aws-amplify';
import { AmplifyProvider } from '@aws-amplify/ui-react'
import App from './App'
import config from './aws-exports'
import './index.css'
import '@aws-amplify/ui-react/styles.css'

// configure amplify app
Amplify.configure(config)
console.log(config)

//configure map colorway
const availableMaps =  Geo.getAvailableMaps(); // all map colors
Geo.configure().AmazonLocationService.maps.default="DarkModeMap-dev" // set to light mode





const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<AmplifyProvider>
		<App />
	</AmplifyProvider>
)