import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2SCUA2VIEo2Oub0HMv802hrmKZDW69A4",
    authDomain: "fir-demo-fab08.firebaseapp.com",
    projectId: "fir-demo-fab08",
    storageBucket: "fir-demo-fab08.appspot.com",
    messagingSenderId: "854359173523",
    appId: "1:854359173523:web:0a266fa3a1b6e1ebc36066"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };