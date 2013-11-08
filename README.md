# angular-seed — the seed for AngularJS apps

This project is based on Angular tutorial from Pluralsight. It is heavily customized, and by no MEANS YET COMPLETE.
Do not know will it ever be completed. It is just a learning playground for mastering Angular.

Out of CRUD, only R is done. Full CRUD will be done soon enough.

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

IMPORTANT:
This is under heavy development, so make sure you pull latest versions


-- How to Run it --

In order to have this SPA (Single Page Application) do anything useful, you have to have a server behind it with some kind of
persistence.  Server behind this SPA is again Node.JS Express and MongoDB.
And that is in another repository with its own instruction set.


Donwload Server project for this client.
Please visit:  https://github.com/wexoni/Angular_Seed_Server.git


1. This is client Angular application that is hosted with Node.Js (Express).
   - Have no fear :)
   - There are many ways how to run node server, let me explain the most simplest one
   - open CMD prompt and navigate to /scripts/angularserver.js filr
   - type: 'node web-server.js'

Node.js server behind this Angular application is extremely simple. It servers the files and CORS is disabled.

 Don't forget to install the node before you do this :)
