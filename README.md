This lab guides you step-by-step through creating a Firebase project, registering a Web app, creating Firestore rules/indexes, obtaining the `firebaseConfig` object, and running the provided Expo app which writes to Firestore.
The app departs from the approach of using Expo Snacks used in previous labs. This project will be completed using vscode and executing commands on the command line.

> **Prerequisite:** The starter repo already contains these files:
> - `App.js`
> - `firestoreConfig.js` (placeholder)
> - `.firebaserc`
> - `firebase.json`
> - `firestore.rules`
> - `firestore.indexes.json`
> - `package.json`, `app.json` (Expo files)

## Step 0

Step 1: Open command prompt <br>
Step 2: cd to Documents  <br>
Step 3: Type git clone https://github.com/BusinessInformationSystemBlanch/MADWeek08.git <br>
Step 4: cd to MADWeek08 <br>
Step 5: Type npm install expo -g <br>
Step 6: Open your project in VS Code. <br>
Step 7: Click on View -- Open View -- Terminal <br>
Step 8: Type Set-ExecutionPolicy -Scope CurrentUser Unrestricted   on the terminal, so the current user can run expo project. <br>
Step 9: Type npx expo install react-dom react-native-web to enable web preview of the app. <br>
Step 10: Tyep npx expo start  to start the project <br>


## Step 1 - register on Firebase
Before proceeding visit firebase.google.com and login using your gmail/google account. If you don't already have one you'll have to create one. Once you have registered on firebase you can proceed with connecting it to your React Native App

## Step 2 — Install prerequisites
Install Expo CLI (optional but recommended) and the Firebase CLI.

```
npm install -g expo-cli
```
install the Firebase CLI
```
npm install -g firebase-tools
```

## Step 3 -- Login to Firebase type the following on the CLI of your repo

```
firebase login
```
A web broswer will open so that you can enter your google credentials and login to firebase. Confrm login by typing
``` 
firebase login list
```

## Lab machines
If the above commands fail to execute on your machine follow the steps 3a.

## Step 3a — Install prerequisites
Open your terminal in the root directory of your repo and log in to your Google account via the CLI:

``` 
npx firebase-tools login
```
A web browser will open so that you can enter your Google credentials and log in to Firebase. Confirm your login by running:

```
npx firebase-tools login:list
```

## Step 4 — Create a new Firebase project
Create a project using a globally unique project ID (lowercase, letters/numbers/hyphens only). Replace ***project-id*** and ***"Display Name"*** with your chose project id and name (drop the angled brackets)
``` 
firebase projects:create <project-id> --display-name "<Display Name>"
```
Set the created project as the default for this folder:
``` 
firebase use <project-id>
```

If step 4 fails, follow step 4a.

## Step 4a — Create a new Firebase project
```
npx firebase-tools projects:create <project-id> --display-name "<Display Name>"
```
Set the created project as the default for this workspace folder:

```
npx firebase-tools use <project-id>
```
## Step 5
Create a Web app entry inside the Firebase project (this produces an App ID):
``` 
firebase apps:create web "<App Name>" --project <project-id>
```
THe following command lists all your projects, you should see only the project you've just create in the list
``` 
firebase projects:list
```

If step 5 fails, follow step 5a.

## Step 5a 

```
npx firebase-tools apps:create web "<App Name>" --project <project-id>
```

```
npx firebase-tools projects:list
```

## Step 6
Use the App ID (format 1:...:web:...) to print the SDK configuration. ***Do not use the project ID here.***
``` 
firebase apps:sdkconfig web <app-id>
```
Copy the printed firebaseConfig object and paste it into firestoreConfig.js where the placeholder comment is:

## Step 6a
 
 ```
 npx firebase-tools apps:sdkconfig web <app-id>
 ```
## Step 7 — Create and Setup your Cloud Firestore Database

Before running your app, you must provision your Cloud Firestore database instance in the Firebase console:

1. Go to your web browser and navigate to the Firebase Console.  <br>
2.  Select your project. <br>
3. Click on Firestore under Project shortcuts in your left-hand menu.  
4. If it's your first time opening it for this project, a page will appear inviting you to Create database.  Click that button. <br>
5. Choose a location: Pick a region close to you (e.g., us-central or europe-west) and click Next. <br>
6. Security Rules Mode: Choose Start in test mode (this makes it easy for your lab code to write data without permission errors right away). Note: Test mode allows open reads/writes for 30 days. <br>
7. Click Enable and wait a few seconds for Firebase to provision your database.   

## Step 8
Run your react native project from the command line by typing
```
npx expo start
```
Choose ***w*** from the list of menu alternatives to run your project in local web mode

add a username and email and click on the button to save your data to firebase

## Step 8 — Verify the Output (Firebase Console)
This is the standard way to verify cloud data storage:

Open your web browser and go to the Firebase Console (http://console.firebase.google.com).

Select your project.

On the left-hand navigation menu, click on Firestore Database (or the Firestore shortcut).

Look at the data viewer pane. You should see a collection named users.

Click on users, and you will see random document IDs containing the name and email you just submitted from your app!

If everything worked correctly your app is saving data to your firestore database in the cloud.