import { firebaseServices } from './services/firebase'
import { FirebaseServices } from './types';
import {FirebaseAuth} from "./services/auth/FirebaseAuth";

const { auth, store } = firebaseServices

class Initter {
  async test() {
    const firebaseAuth = new FirebaseAuth(auth);
  }
}
new Initter().test()
