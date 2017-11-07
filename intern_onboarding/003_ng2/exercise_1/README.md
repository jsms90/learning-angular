# Angular 2 - Exercise 1 - Creating an app with NG-CLI

Duration: 20 minutes

In this section we are going to create and start an Angular app using ng-cli. First of all, ensure you have the cli installed. Type `ng` at a command line.

* No errors? Good.
* Errors? Install with `npm install @angular/cli -g`

Now create your app:

    ng new app-name --style scss --routing true

Start the server

	cd app-name
    ng serve

Now visit http://localhost:4200 in a browser to see your new app.

App? Wooot!


## Challenge

1. Open app.component.ts and change the title of your app.
2. Open app.component.scss, and set `h1 { color:red }`. Save and checkout the live-reload.
3. Go into app.component.html. Delete the code that you find there. Make yourself a little homepage. Muck about.


## Notes to Instructor

The goal here is to create a basic app and get it running in the browser. Run this as a follow-along, you type, and they follow you typing. While you are waiting for npm install to finish, show the structure of the app.

1. Talk about NG-CLI
2. Create a simple app with NG-CLI

    ng new beamery-app --style scss --routing true
    ng serve
