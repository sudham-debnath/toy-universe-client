// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Bhh9YX8qeFeBfjt6zAv7f9JxuiuVm8Y",
  authDomain: "toy-universe-client.firebaseapp.com",
  projectId: "toy-universe-client",
  storageBucket: "toy-universe-client.appspot.com",
  messagingSenderId: "309396918984",
  appId: "1:309396918984:web:1eb0cf95b94f8169d68bfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;