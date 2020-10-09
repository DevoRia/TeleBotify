import IAuth from "./IAuth";
import {auth} from 'firebase';

export class FirebaseAuth implements IAuth{

  private readonly firebaseAuth: auth.Auth;

  constructor(firebaseAuth: auth.Auth) {
    this.firebaseAuth = firebaseAuth
  }

  async getCurrentUser() {
    return this.firebaseAuth.currentUser
  }

  async login(login: string, password: string): Promise<auth.UserCredential> {
    return this.firebaseAuth.signInWithEmailAndPassword(login, password)
  }

  async logout(): Promise<void> {
    return this.firebaseAuth.signOut()
  }

  async createUser(login: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(login, password)
  }

}
