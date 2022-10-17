# Description

## Concept

The following examples are components abstracting the use of Amazon Location Services into Map Components.

## Local Set-up

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

### Install Dependencies
Ensure that all application dependencies and the Amplify CLI are installed
> note, skip the latter of the two if you have Amplify CLI installed
```
npm install && npm install -g @aws-amplify/cli
```

