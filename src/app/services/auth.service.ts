import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { dataSongs } from '../models/data-songs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SongsComponent } from '../songs/songs.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  songsCollection: AngularFirestoreCollection<dataSongs>;
  songs: Observable<dataSongs[]>;
  songsDoc: AngularFirestoreDocument<dataSongs>;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { 
    this.songsCollection = afs.collection<dataSongs>('songs');
    this.songs = this.songsCollection.valueChanges();
  }
  addSong(song: dataSongs){
    this.songsCollection.add(song);
  }

  getSong(){
    return this.songs;
  }

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

  resetPassword(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email)
    .then(() => {
    }).catch(function(error) {
    });
  }

  userVerification(email: string) {
    return  this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
    }).catch(function(error) {
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
