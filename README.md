# Description

## Concept

The following examples are components abstracting the use of Amazon Location Services into Map Components.

## Local Set-up

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
This creates a policy on AWS with full access to Amazon Location Services. We will assign this policy to our IAM user and user groups.


### Create an IAM user/Add Policies to existing IAM user
Next, an IAM user with two policies must be established by going to `IAM > users > Add User > Permissions` or editing an existing user. These two policies include the prior defined geo policy as well as `AdministratorAccess-Amplify`


### Initialize Amplify app

```
Map-API-Example % amplify init
```
> Initialize with access keys, and enter the credentials of the prior created/updated IAM user
