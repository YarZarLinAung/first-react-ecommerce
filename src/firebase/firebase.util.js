import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCaq3jVgCneyT1vmuh2LCTgte-itlzzifQ",
    authDomain: "react-ecommerce-8f904.firebaseapp.com",
    databaseURL: "https://react-ecommerce-8f904.firebaseio.com",
    projectId: "react-ecommerce-8f904",
    storageBucket: "react-ecommerce-8f904.appspot.com",
    messagingSenderId: "510452492035",
    appId: "1:510452492035:web:c6b0da477469129994ab36"
}
firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)
export default firebase

