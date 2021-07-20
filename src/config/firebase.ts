import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCUcSDpyz6gtvsB7BQrwjQxr1Sjm7JdZq4',
  authDomain: 'n-financial-s.firebaseapp.com',
  projectId: 'n-financial-s',
  storageBucket: 'n-financial-s.appspot.com',
  messagingSenderId: '806479905379',
  appId: '1:806479905379:web:3c4dc35b30afa5da206e56',
  measurementId: 'G-QNBZTJXL6E',
}
firebase.initializeApp(config)

firebase.firestore()
export const auth = firebase.auth()
export default firebase
