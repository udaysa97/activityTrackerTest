# activityTrackerTest

* UNDERSTANDING THE STRUCTURE*

Structure :
index.js contains starting code. Added route and ejs view engine in this

Routes/
Contains get and post operations land here according to index.js inside this folder. 
index.js is the mail route which further devides to different routes to make code cleaner and easier to debug and go through

controller/

All backend code from hitting and getting data from DB to manipulating it is done here. It is cleanly devided to various functionalities and is exported to the routers. 
The various js files in router simplpy call the their exported functions

Views are called from here to be rendered

/view
contains ejs files. The Html part is handled here. Controller send various dynamic object which is used by the ejs file to render with dynamic objects and variables 

/config

Basic code to connect to the mongoose database. Name of table is provided here

/models

The schema desing for the table in mongoose is provided here. Various controllers use this structure to push or get data from DB

* WHAT IT DOES> *

An activity can be added in the homepage that needs to be tracked
Each activity has a 7 day log (including current day) . 
On the home page user can mark activity as done or NotDone for the current day only. 
If a activity as no action for that day status is NONE

on the show all hobbies page for each day till 7 days from today the status is shown for everry single hobby.

User can remove or change the status of hobby as logically allowed

* FUTURE WORK*
1) whole calender to keep track of streaks and other importaant data. Right now data is restrcited to previous 7 days
2) MAJOR UI OVERHAUL NEEDED
3) Make small cahnges like make back to home button work and change name of an added acivity etc.

* Anyone wants to contribute please do*
