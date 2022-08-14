// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // initialize the application with firebase
import { getAuth } from 'firebase/auth'
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVcT5s2wyAlTTzL8dkFZAn3aKJownnLLA',
  authDomain: 'auth-yt-52ced.firebaseapp.com',
  projectId: 'auth-yt-52ced',
  storageBucket: 'auth-yt-52ced.appspot.com',
  messagingSenderId: '292693760706',
  appId: '1:292693760706:web:aada71039a151f0791795b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//getAuth to obtain the parameters of the initialized authentication
//inside of auth has what is necessary for the authentication
