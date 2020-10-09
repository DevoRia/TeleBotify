// @ts-ignore
import { firebaseConfig } from '../../config/services.json'
import { FirebaseServices } from '../../types';

const firebase = require('firebase');

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const store = firebase.firestore()
const auth = firebase.auth()

export const firebaseServices: FirebaseServices = {
  store,
  auth
}
