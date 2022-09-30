export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "mapexampled81546fb": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "MapUserPoolGroupRole": "string"
        }
    },
    "geo": {
        "GeofenceStorage": {
            "Name": "string",
            "Region": "string",
            "Arn": "string"
        },
        "DarkModeMap": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        },
        "LightModeMap": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        },
        "SearchMap": {
            "Name": "string",
            "Region": "string",
            "Arn": "string"
        },
        "StandardMap": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        }
    }
}