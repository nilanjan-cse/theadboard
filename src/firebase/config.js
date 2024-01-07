// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS4zzI8xyOsXD_JUOHw2Aju5pF-kf9apQ",
  authDomain: "theadboard-b4fc9.firebaseapp.com",
  databaseURL: "https://theadboard-b4fc9-default-rtdb.firebaseio.com",
  projectId: "theadboard-b4fc9",
  storageBucket: "theadboard-b4fc9.appspot.com",
  messagingSenderId: "328645048677",
  appId: "1:328645048677:web:f8564d8ce60ce38574098c"
};
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// Initialize Firebase
export default firebase_app;