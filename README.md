# expensitest


## Description
Expensitest is a basic expo react native application that demonstrates user authentication into an expensify server, persists the authentication state into the device's storage through AsyncStorage and fetches a list of transactions form the server and creates a transaction to be posted to the server before being added on the list.

#### Core dependencies
1. [expo](https://expo.dev/client)
2. [axios](https://axios-http.com/)
3. [React Native](https://reactnative.dev/)
4. [AsyncStorage](https://www.npmjs.com/package/@react-native-async-storage/async-storage/)
4. [React Navigation](https://reactnavigation.org/)



#### Deliverables
    - Create a mobile app (React Native)
    - Authenticate to an account
    - Download and list existing transactions
    - Create new transactions
    
## HOW TO RUN

##### Download the zipped expensify-remote-challenge.zip file and unzip.
##### Open the terminal
##### Change into the expensify-remote-challenge directory

```bash
cd expensify-remote-challenge
```
##### install dependencies
```bash
npm install
```
### To run on iOS
Ensure you have a physical iOS device or simulator running on your mac computer. The command to start the iOS app is

```bash
npm run ios
```
On a simulator, expo go will be installed automatically and the app will start automatically.
To run the app on your physical device, simply open the camera app and scan the QR code that will appear on the terminal when you run the command above.

### To run on android
Ensure you have a physical android device or an android emulator running on your computer. You may need android studio to run an android emulator. The command to start the android app is:

```bash
npm run android
```

As with the iOS emulator, expo go will be installed automatically and the app will start.
To run the app on a physical android device, install the [expo go](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US&pli=1) app on your android device then scan the QR code that appears on the terminal.

### Directory structure and composition
```
expensitest
├── app.json
├── App.js
├── package.json
├── README.md
└── assets
└── src
    ├── index.js
    ├── AppProviders.js
    └── actions/
    └── components/
    └── containers/
    └── contexts/
    └── navigation/
    └── reducers/
    └── screens/
    └── styles/
```
The src folder houses most of the custom app logic. Within the src folder there are multiple files and subdirectories with different functionalities.

1. _index.js_ serves as the app's main entry point. It is imported into _App.js_ on the root directory which then run on _AppEntry.js_ in **node_modules/expo**.
2. _AppProviders.js_ contains the logic for adding the app's context providers in an elegant manner in order to avoid creating a complicated context tree in _index.js_.
3. The **actions** directory has all the http request actions. The authentication logic is in _authActions.js_ and the transactions logic is in _transactionActions.js_.
4. The **components** directory has all the components that are used app wide as well as their styles.
5. The **containers** directory has the main view controller of the app. 
6. The **contexts** directory has all the contexts that are used to pass state throughout the app.
7. The **navigation** container has the navigation login used in the app.
8. The **reducers** directory contains all the reducers used to help pass the state between the components, contexts and actions.
9. The **screens** directory houses all the screens within the app, in this case, the Login and Home screens, as well as screen specific components contained in their own directories named after the specific component and their styles, for example, in the ```Login``` component, there is a ```LoginForm``` subdirectory which has the LoginForm component and it's styles, i.e ```LoginForm/index.js``` and ```LoginForm/styles.js```.
10. The **styles** directory houses all the styles common to the app.

### Project info
1. I avoided using prop-types for prop validation as I felt they were leaning toward type checking.
2. The abstraction has been kept to a minimum and as such, I avoided creating custom hooks and housed parts of the logic on the screen components.
3. The code is formatted using prettier and linted with ESLint in the airbnb style with a few exceptions.
4. Code comments have been kept to a minimum and mostly used with the longer functions containing huge chucks of code to make the review easier.
5. The app includes a picture splashscreen and all of the assets are downloaded from [Flaticon](https://www.flaticon.com/).
6. The web version of the app will run but cannot make http requests since it requires a proxy which went beyond the scope of requirements.
7. Environmental variables are kept in the _.env_ file and read into the app files through **react-native-dotenv**.



