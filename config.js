// firebase key setup

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//for web
const firebaseConfig = {
    apiKey: "AIzaSyB53LjeC3iavNfKlMtZ1qYFI6PqcKoraDA",

  authDomain: "hostelhub-fdaca.firebaseapp.com",

  projectId: "hostelhub-fdaca",

  storageBucket: "hostelhub-fdaca.appspot.com",

  messagingSenderId: "451830684626",

  appId: "1:451830684626:web:b9afb50f61626304db460b",

  measurementId: "G-LZL05J6B3Q"

}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}