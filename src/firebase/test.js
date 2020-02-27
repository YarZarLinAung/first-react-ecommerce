import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('oTitaNlW33RKEzmTbqae').collection('cartItems').doc('789v4WS04nKAfhCcIqU2')
firestore.doc('/users/oTitaNlW33RKEzmTbqae/cartItems/789v4WS04nKAfhCcIqU2')

firestore.collection('/users/oTitaNlW33RKEzmTbqae/cartItems')