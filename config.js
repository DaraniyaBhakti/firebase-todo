import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTOv05e0hzdRXixN07DGeV0wKGa7WjzKk",
  authDomain: "fir-todo-e02c2.firebaseapp.com",
  projectId: "fir-todo-e02c2",
  storageBucket: "fir-todo-e02c2.appspot.com",
  messagingSenderId: "740562378940",
  appId: "1:740562378940:web:b6e25807ce92a868e870b9"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

// export const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app);