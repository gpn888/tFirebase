import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAsImHMg-2VcZ9XnQcv7qizT_JwZLj6M14",
    authDomain: "admintorioux.firebaseapp.com",
    databaseURL: "https://admintorioux.firebaseio.com",
    projectId: "admintorioux",
    storageBucket: "admintorioux.appspot.com",
    messagingSenderId: "725463825217"
};

firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {
    platillos,
    bebidas
}

export default datos;