# Description

## Concept

The following examples are components abstracting the use of Amazon Location Services into Map Components.

## Local Set-up | Configuring Amplify

### Install Dependencies
Ensure that all application dependencies and the Amplify CLI are installed
> note, skip the latter of the two if you have Amplify CLI installed
```
Map-API-Example % npm install && npm install -g @aws-amplify/cli
```


### Create geo permissions on AWS
In order to have AWS allow access to the map resources, we have to create a new policy by going to `IAM > policies > Create Policy` on the AWS console. Under the JSON tab, post the following:
```
{
   "Version": "2012-10-17",
   "Statement": [ 
      { 
          "Action": [
              "geo:*"
           ],
           "Resource": "*", 
           "Effect": "Allow"
      }
   ]
}
```
> This creates a policy on AWS with full access to Amazon Location Services. We will assign this policy to our IAM user and user groups.



### Create an IAM user/Add Policies to existing IAM user
Next, an IAM user with two policies must be established by going to [`AWS Console > IAM > users > Add User > Permissions`](https://us-east-1.console.aws.amazon.com/iam/home#/users) or editing an existing user. These two policies include the prior defined geo policy as well as `AdministratorAccess-Amplify`

> save these credentials as you will have to reuse them



### Initialize Amplify in the App
To create a connection to Amplify services in our application, run the following command.
```
Map-API-Example % amplify init
```
When the CLI prompts,
- Select `Initialize with access keys`
- Enter the credentials of the prior created/updated IAM user

> if you wish to view the current state of your amplify application at any point, run `amplify status`.


### Add a basic map
Having our amplify app initialized, we can now add a variety of geo services. The first service we will add is a general location map.
```
Map-API-Example % amplify add geo
```
When the CLI prompts, 
- Select `Map (visualize the geospatial data)` as the map type. Accept the CLI's prompt to add auth.
- Setting up authentication, select `Default configuration`, then `username`, and complete auth set up.
- Name your map, provide access to `Authorized users only`, and optionally configure advanced settings.

> Advanced settings allows the choice of map colorways and styles. If you wish to provide functionality for toggling colorways, a separate map must be created for each. To explore all potential map styles, reference [`AWS Console > Amazon Location Services > Maps > Create Map`](https://us-east-1.console.aws.amazon.com/location/maps/home?region=us-east-1#/).

We can now test the initial set up of our application. Launch the app using `npm start`. If the page renders the test tab and a map displays, you've successfully laid the foundation to the application.


### Push the initial work to Amplify
Locally we've set up the foundation to our Amplify app. Let's now push those updates to AWS.
```
Map-API-Example % amplify push
```
> Don't forget to push future changes!

### Add location search
To add our second map service, location searching, we again add an amplify geo resource.
```
Map-API-Example % amplify add geo
```
When the CLI prompts,
- Select the option `Location search (search by places, addresses, coordinates)`
- Name your search index. This resource enables pin-dropping on a searched location.
- Select `Authorized and Guest users`
- Optionally, configure advanced settings.

**Test your work by pushing your changes to amplify, then switching to the 'location' tab of the launched app. Try to search for a place on the map.**

### Add geofencing
To enable a map with geofencing, call to add another geo resource.
```
Map-API-Example % amplify add geo
```
When the CLI prompts,
- Select the option `Geofencing (visualize virtual perimeters)`
- Name your geofence collection; The storage on AWS for saved geofences.
- Confirm the addition of a Cognito User Pool.
- Select `Create or update Cognito user pool groups`
- Name your user pool; Opt out of adding another; Optionally, sort the user pool groups.
- Grant full access to the created user pool *(click space on each option then press enter)*

> Additionally, we must adjust our prior created policy to our app's Federated Identities in Cognito

Go to `AWS Console > Amplify > YOUR_APP > YOUR_BACKEND_ENV > Auth > View Federated Identities in Cognito`
- Select `Edit Federated Identities` in the top right of the page
- Note down the auth/unauth roles associated with this identity

In a separate tab, go to `AWS Console > IAM > Roles`
- locate the auth/unauth roles noted prior
- add the prior created policy to both of these roles.
**Test your work by pushing your changes to amplify, then switching to the 'geofence' tab of the launched app. If configured incorrectly, a 400 error should print on the console relative to IAM groups/roles. Test the ability to add, name and save geofences on the map.**

### Add routing
Routing requires the creation of a route calculator on the AWS Console. 

Go to [`AWS Console > Amazon Location Services > Route Calculators`](https://us-east-1.console.aws.amazon.com/location/routes/home?region=us-east-1)
- Select `Create New Route Calculator`
- Name and create a new route calculator
- Save this calculator in a `.env` file in the `src` folder of the repo in the format:
```
GEO_ROUTER = "YOUR_ROUTER_NAME"
```
**Test your work by pushing your changes to amplify, then switching to the 'routing' tab of the launched app. If the routes appear, you've successfully configured routing.**

### Add styling
Enabling different map styles requires creating a map resource for each desired colorway.
```
Map-API-Example % amplify add geo
```
When the CLI prompts, 
- Select `Map (visualize the geospatial data)` as the map type. Accept the CLI's prompt to add auth.
- Setting up authentication, select `Default configuration`, then `username`, and complete auth set up.
- Name your map DarkMode, provide access to `Authorized users only`, and optionally configure advanced settings.
- Opt in to configuring advanced settings. For this example, select map style `DarkGrayCanvas`.
- Don't set this map to default.
- Repeat the completed steps for one more map; Name the map Satellite and select the map style `Imagery`

**Test your work by pushing your changes to amplify, then switching to the styling tab of the launched app. If your created maps show up, select one and make sure the map updates when the page refreshes.**


## Advanced Functionality | Hitting AWS ALS API
Functionality such as plotting routes and evaluating geofences requires hitting the Amazon Location Services API.
