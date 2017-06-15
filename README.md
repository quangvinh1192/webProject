# web-app [ ![Codeship Status for CSE112-FinalProj/web-app](https://app.codeship.com/projects/1603ac60-1b36-0135-93c1-725b0e594e8b/status?branch=master)](https://codeship.com/projects/219549)

# Introduction

Welcome to Extension. We are the extension between you and your customers, creating a smooth and convienient interaction  for both sides. With our application you gain a variety of tools at your disposal--
* Buisness side
	* Checking in your customers
	* Seeing appointment analytics 

* Customer side
	* Similer appointment set ups
	* No need for application download, uses methods they already use
	* Appointments at their conviennce, regardless of buisness hours
All together this will help you better service your customer, see their habits and general buisness trends. With this information you can better understand how you can improve your buisness, as well as increasing customer satisfaction

# First Run
1. Install [Node.js](http://nodejs.org/download/)
2. Navigate to the root directory
3. Install npm dependencies:

		$ rm -rf node_modules
        $ npm install
        $ npm install --global gulp

4. Use ``gulp`` to run the application
5. Navigate your browser to [http://localhost:4000](http://localhost:4000/)


Optional

1. Setup account with [mLab](https://mlab.com/) - one already provided below
2. Copy mongoDB access point into app.js:

        $ var mongoURI = process.env.MONGOLAB_URI || 'YOUR MONGODB CONNECTION ON mLAB';


## First Run Potential Errors

* Error: Cannot find module 'express' - 
	* rerun $ npm install
* Error: Cannot find module 'monk' - 
	* $ npm install monk --save
	* $ rm -rf node_modules
	* $ npm install
* Cannot launch locally OR Error: Unexpected token ...
	* reinstall node so that you have the latest version
	* remove the const word from nightwatch.conf.basic.js (first line)
* Problems deploying
	* do the steps for "Error: cannot find module monk"
	* add these two lines to app.js
	* line 116 add the resave and saveunitialized values
	* app.use(session({secret: '1234567890QWERTY',resave: true, saveUninitialized: true }));

## Push to testing environment

1. Simply push your experimental changes to the ``staging`` branch.
2. Changes may be view on the [staging site](https://nocontext-staging.herokuapp.com/). Changes may take a few minutes to appear due to pipeline running tests.

# Logging in as Peter

In order to login as peter, use the following credentials

	username: peter@nocontext.com
	password: peter

# Logging in for Demo Purposes


	username: nocontext@nocontext.com
	password: nocontext
	
# Places to Know

* The live app can be found [here](https://nocontext-staging.herokuapp.com/).
	
* Slack Integration can be found here
	``NoContext-CSE112.slack.com``

```
	username: sgvillal@ucsd.edu
	password: extension
```

# Our Pipeline

``Version control -> CI -> unit test -> e2e testing -> linting -> document -> minify -> deployment``

* Version control: Github
* CI - codeship
* unit tests - quint, phantomjs
* e2e tests - nightwatchjs, selenium
* linting - jshint
* document - jsdoc
* minify - minifier
* deployment - heroku with Node

## Access to Github 

Go to the [Github](https://github.com/charlyxie/CSE112-FinalProj/) .

Hints
* Always Pull before you push
* Develop on your own branch. Once you're ready to merge, make a pull request first. If there are any conflicts, resolve them but test them before you squash merge
* Make sure you don't leave git remnants in your code

## Access to CI platform on Codeship

Go to the [Codeship](http://codeship.io) website.
Use the following credentials:
```
	username: c4xie@ucsd.edu
	password: 48vipun7ftnA
```

Click the restart button on the latest build to rebuild it.

## Access to Facebook 

Go to the [Facebook](http://facebook.com) website.
```
	username: cse112team8@gmail.com
	password: fubarForPeter
```

## Access to mLab 

Go to the [mLab](https://mlab.com/) website.
```
	username: cse112-team8
	password: 85kw4Prey3L2
```

## Access to Heroku 

Go to the [Heroku](https://id.heroku.com/login) website.
```
	username: c4xie@ucsd.edu
	password: 7xp8Gs4trkaU
```



# Technical Information for Future Devolpers

* SMS Integration
	* In order for this to work, you must add the number in twillio (no need to do this for email). This is due to us using a trial version of Twillio, so phone numbers must be verified
	![SMS & Email Confirmations for manual appointment][SMSEmailManual]
* Facebook Bot
	* Currently email confirmation does not work on Facebook Bot. It will work manually however.
* Node versions 
	* Node version must be 6.11, anything +/- v6 will cause errors
	* Node versions can be changed around, however, any version below v5 of node will not work for Mocha
* Fetching information from the database
	* fetching num_appt from the database for example, add {{num_appt}} to the HTML to use the value
* Database help - dashboard/checkin
	* appts_past - how many appointments were past their deadline today
	* num_appt - how many appointments there are today

* Codeship & Selenium
	* Occasionally CodeShip will cause Selenium to fail or timeout, if it does, just restart the build and it will work


# CodeShip Walkthrough

Go to the [Codeship](http://codeship.io) website.
Use the following credentials:
```
	username: c4xie@ucsd.edu
	password: 48vipun7ftnA
```

![Codeship login][CodeshipLogin]

Click on projects tab and find project CSE112-FinalProj.
![Codeship projects][CodeshipProject]

Here we can see all recently passed and failed deployments
![Codeship deployments][CodeshipDeploy]

[SMSEmailManual]: documentation/SMSEmailManualAppointment.jpg "SMS & Email Confirmations for manual appointment"

[CodeshipLogin]: documentation/codeship-login.png "Codeship login"
[CodeshipProject]: documentation/codeship-projects.png "Codeship Project"
[CodeshipDeploy]: documentation/codeship-deploys.png "Codeship Deploy"

