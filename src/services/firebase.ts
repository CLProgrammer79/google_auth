// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // initialize the application with firebase
import { getAuth } from 'firebase/auth'
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'info deleted',
  authDomain: 'info deleted',
  projectId: 'info deleted',
  storageBucket: 'info deleted',
  messagingSenderId: 'info deleted',
  appId: '1:info deleted:web:info deleted'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//getAuth to obtain the parameters of the initialized authentication
//inside of auth has what is necessary for the authentication
