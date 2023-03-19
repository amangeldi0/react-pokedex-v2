import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAppP1sp-YfUDOcBFWXVHtEB1qRJByopTM',
    authDomain: 'react-pokedex-ffe94.firebaseapp.com',
    projectId: 'react-pokedex-ffe94',
    storageBucket: 'react-pokedex-ffe94.appspot.com',
    messagingSenderId: '674045289723',
    appId: '1:674045289723:web:8072faaf871164466d3c5e',
    measurementId: 'G-L8M9S6EB6L',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
