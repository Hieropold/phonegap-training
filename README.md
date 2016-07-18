# phonegap-training
Training application for Phonegap/Cordova intro session. The application is
based on Angular and Ionic Framework.

# Prepare environment

npm install -g cordova ionic

ionic start pgtrain tabs

ionic platform add android

ionic build android

# Add some logic

We will be creating an app which will help users with selecting best available lamp.

Data from lamptest.ru will be used for this. I have already downloaded this data and
converted it into JSON to save us some time.

Create a service which will be using this data.

# Links
- https://screeps.com/
- http://ionicframework.com/getting-started/
- http://ionicons.com/
- https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md