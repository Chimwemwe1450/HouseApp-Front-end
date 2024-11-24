Frontend Requirements
To set up and run the project, ensure the following prerequisites are met:

Node.js

Version: v18.19.0
Use nvm (Node Version Manager) to manage and back up your Node.js version.
nvm install 18.19.0
nvm use 18.19.0
Ionic Framework

Install the latest version of Ionic CLI globally:

npm install -g @ionic/cli
Angular CLI

Install or update Angular to the latest version:

npm install @angular/cli
Or update Angular to the latest version:
bash
Copy code
ng update @angular/cli
Running the Project

Use the following command to serve the app in the browser for testing:

ionic serve 
Known Issues
CORS Issue on Android Devices
Issue:

CORS (Cross-Origin Resource Sharing) requests are being blocked by the backend when testing on Android devices.
This issue persists despite implementing necessary CORS fixes in the backend configuration.
Status:

The app functions correctly in the browser but encounters CORS-related problems on Android devices cause its using a local back end .


Commmon work around is  i created it with mockAPI cause My SQL is  causing corse issue  I created a branch for APK  Mock API so you will be able to use it 
