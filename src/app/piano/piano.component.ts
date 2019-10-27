import { Component, OnInit, Input } from '@angular/core';
import { SongsComponent } from '../songs/songs.component';
import { Alert } from 'selenium-webdriver';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  providers: [ SongsComponent ],
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  public isLogin: boolean;
  public userName: string;
  public userEmail: string;
  alerts: Alert[] = [];
  isHighlighted: Object = {};
  isRecording: boolean = false;
  stopRecording: boolean = false;
  newSong: Array<string> = [];
  songPosition: number = 0;
  currentSong: Array<string> = [];
  keyNoteMap: Object = {
    "a":"c4", "w":"cd4", "s":"d4","e":"de4", "d":"e4",
    "f":"f4", "t":"fg4", "g":"g4", "y":"ga4", "h":"a4",
    "u":"ab4", "j":"b4", "A":"c5", "W":"cd5", "S":"d5",
    "E":"de5", "D":"e5", "F":"f5", "T":"fg5", "G":"g5",
    "Y":"ga5", "H":"a5", "U":"ab5", "J":"b5" } 

  constructor(
    private comp: SongsComponent,
    public authService: AuthService,
    public router: Router
  ) { }
  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if (auth){
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
      }else {
        this.isLogin = false;
      }
    })
  }
  logOut(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
  public startSong(song): void {
    this.isHighlighted = {};
    this.currentSong = this.comp.getSong(song);
    this.songPosition = 0;
    if (this.currentSong){
      let key = this.currentSong[this.songPosition];
      this.isHighlighted[key] = true;
    }
  }

  onKeydown(event : any) {
    let note = this.keyNoteMap[event.key]
    if (note) {
     this.startTheNote(note);
    }
  }

  startTheNote (note){
    if(this.isRecording === true){
      this.newSong.push(note);
    }
    if(this.isHighlighted[note] === true){
      this.isHighlighted[note] = false;
      this.songPosition = this.songPosition + 1;
      let key = this.currentSong[this.songPosition];
      this.isHighlighted[key] = true;
      let sound = "../assets/sounds/" + note + ".mp3";
      sound && ( new Audio(sound) ).play()
    } else {
      let sound = "../assets/sounds/" + note + ".mp3";
      sound && ( new Audio(sound) ).play()
    }
  }

  recordSong(){
    this.isRecording = true;
    this.newSong = [];
    this.isHighlighted = {};
  }
  stopRecSong(){
    this.stopRecording = true;
    this.isRecording = true;
    this.comp.addSong(this.newSong);
    let newName = prompt("Please enter the name of your new song:");
    document.getElementById("changeName").setAttribute("value", newName);
  }
}
