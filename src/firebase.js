import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDtJJcwlMk177hwthqDYtsM7fqcDb_rQQc',
	authDomain: 'disney-plus-mk.firebaseapp.com',
	projectId: 'disney-plus-mk',
	storageBucket: 'disney-plus-mk.appspot.com',
	messagingSenderId: '1078608856424',
	appId: '1:1078608856424:web:3d8ef632b42febdd2dc2dd',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBMHkWKmNXMGiOMlWW_UbCIXzXi7vDOHns",
//   authDomain: "disney-clone-1ee36.firebaseapp.com",
//   projectId: "disney-clone-1ee36",
//   storageBucket: "disney-clone-1ee36.firebasestorage.app",
//   messagingSenderId: "60432213776",
//   appId: "1:60432213776:web:336ce9a302b85004b7a795",
//   measurementId: "G-YB5G6PVY8S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);