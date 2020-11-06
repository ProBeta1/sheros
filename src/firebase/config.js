import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMuNHes9kWJ6AZtVNx_hSBO4uzs-ano04",
    authDomain: "sheros-291df.firebaseapp.com",
    databaseURL: "https://sheros-291df.firebaseio.com",
    projectId: "sheros-291df",
    storageBucket: "sheros-291df.appspot.com",
    messagingSenderId: "767966140273",
    appId: "1:767966140273:web:18476e119611a104b648d0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
