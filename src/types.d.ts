import * as firebase from 'firebase';
import Firestore = firebase.firestore.Firestore;
import Auth = firebase.auth.Auth;

export type FirebaseServices = {
  auth: Auth,
  store: Firestore
}
