import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  registerUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      console.log(email);
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then( userData => resolve(userData),
      error => reject (error));
    });
  }

  loginEmail(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      error => reject (error));
    });
  }

  getAuth() {
    return this.afAuth.authState.map ( auth => auth );
    
  }

  logout(){
    return this.afAuth.auth.signOut()
  }
}
