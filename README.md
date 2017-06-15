# Introduction
----------------------------
Welcome to Extension. We are the extension between you and your customers, creating a smooth and convienient interaction  for both sides. With our application you gain a variety of tools at your disposal--
* Buisness side
..* Checking in your customers
..* Seeing appointment analytics 

* Customer side
..* Similer appointment set ups
..* No need for application download, uses methods they already use
..* Appointments at their conviennce, regardless of buisness hours
All together this will help you better service your customer, see their habits and general buisness trends. With this information you can better understand how you can improve your buisness, as well as increasing customer satisfaction

# web-app [ ![Codeship Status for CSE112-GoldTeam/web-app](https://codeship.com/projects/5f33bf40-cb9d-0133-dbda-4a84e368cd36/status?branch=master)](https://codeship.com/projects/59497)


First Run
----------------------------
1. Setup account with [mLab](https://mlab.com/)
2. Copy mongoDB access point into app.js:

        $ var mongoURI = process.env.MONGOLAB_URI || 'YOUR MONGODB CONNECTION ON mLAB';
        
2. Install [Node.js](http://nodejs.org/download/)
3. Navigate to the root directory
4. Install npm dependencies:

        $ npm install
        $ npm install --global gulp

6. Use ``gulp`` to run the application
7. Navigate your browser to [http://localhost:4000](http://localhost:4000/)

Push to testing environment
----------------------------
1. Simply push your experimental changes to the ``develop`` branch.
2. Changes may be view on the [staging site](http://fubar-staging.herokuapp.com/).

Logging in as Peter
----------------------------
In order to login as peter, use the following credentials

	username: peter@enque.com
	password: peter
	
The live app can be found [here](http://team-fubar.herokuapp.com/).
	
Slack Integration can be found here

	team-fubar.slack.com
	
	username: gev@ucsd.edu
	password: teamfubar

Access to CI platform on Codeship
----------------------------
Go to the [Codeship](http://codeship.io) website.
Use the following credentials:

	username: gev@ucsd.edu
	password: teamfubar

Click the restart button on the latest build to rebuild it.
