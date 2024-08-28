
##  Installation
<br>

To setup the project on your local environment, follow the given steps:

1. Fork the [SainiAditya1/MERN_AUTH](https://github.com/SainiAditya1/Video.git) repository.
2. Clone the repository:
```
https://github.com/<USERNAME>/MERN_AUTH

```

  Replace the `<USERNAME>` with your GitHub username. 

  ### Frontend

Move to the client directory

```bash
  cd client
```

Install the necessary dependencies

```bash
  npm install
```
Install Firebase SDK
```
npm install firebase
```
Initialize Firebase
```
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

```
To start the server in development mode

```
  npm start
```

Go to `localhost:3000` to view the website.
<br>

### Backend

Move to the server directory

```bash
  cd api
```

Install the necessary dependencies

```bash
  npm install
```

Add a config.env file in the root directory and enter your MongoDb Atlas and JWT Secret key 
The format of .env file should be similar to the following
```
CONNECTION_URL = "Mongo db url"
JWT_SECRET = "This could be anything like test"
```
To start the server in development mode

```
  npm start
```

Server will start at `PORT 5000`
<br>





![Screenshot from 2023-10-17 17-16-28](https://github.com/SainiAditya1/MERN_AUTH/assets/114948505/bf48ccdc-62ae-479f-b157-3c9f87076bb4)
![Screenshot from 2023-10-17 17-16-42](https://github.com/SainiAditya1/MERN_AUTH/assets/114948505/9dd5ea28-7355-4748-b4c5-d2f6caf5ca56)
