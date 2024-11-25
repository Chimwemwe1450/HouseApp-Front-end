Setup and Configuration Guide
Prerequisites
1.	Node.js
	Required version: v18.19.0
	Use nvm (Node Version Manager) to manage versions:
nvm install 18.19.0 nvm use 18.19.0 
2.	Ionic Framework
	Install the latest Ionic CLI globally:
npm install -g @ionic/cli 
3.	Angular CLI
	To install or update Angular CLI:
npm install @angular/cli 
	If Angular CLI is already installed, update it:
ng update @angular/cli 
----------------------
Running the Project
1. Development Mode (Browser Testing)
·	To serve the app locally in a browser for testing:
ionic serve 

2. APK Build for Android Testing
·	Build the app for Android testing:
ionic cap build android 
·	Open the project in Android Studio:
ionic cap open android 
·	Note: Ensure Android Studio is installed and updated to the latest version.
----------------------
Known Issues
1. CORS Issues on Android Devices
·	Problem: CORS requests are being blocked by the backend server when testing the app on Android devices, even though backend fixes have been applied. This occurs because the backend is hosted locally.
·	Observation: Browser testing works fine because most modern browsers can bypass CORS restrictions during local development using developer tools.
2. Current Workaround
	A branch named Mock-Api-Apk has been created to address this issue.
	This branch utilizes MockAPI to simulate backend functionality without CORS restrictions.
	Steps to Build and Test Using MockAPI:
1.	Switch to the branch:
git checkout Mock-Api-Apk 
2.	Build the APK and proceed with testing.
ionic cap build android


