import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Piano-app';


  startTheNoteC4 (sound){
      sound = "../assets/sounds/" +"c4.mp3";
      sound && ( new Audio(sound) ).play()
    }
    
  startTheNoteCD4 (sound){
    sound = "../assets/sounds/" +"cd4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteD4 (sound){
    sound = "../assets/sounds/" +"d4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteDE4 (sound){
    sound = "../assets/sounds/" +"de4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteE4 (sound){
    sound = "../assets/sounds/" +"e4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteF4 (sound){
    sound = "../assets/sounds/" +"f4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteFG4 (sound){
    sound = "../assets/sounds/" +"fg4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteG4 (sound){
    sound = "../assets/sounds/" +"g4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteGA4 (sound){
    sound = "../assets/sounds/" +"ga4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteA4 (sound){
    sound = "../assets/sounds/" +"a4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteAB4 (sound){
    sound = "../assets/sounds/" +"ab4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteB4 (sound){
    sound = "../assets/sounds/" +"b4.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteC5 (sound){
    sound = "../assets/sounds/" +"c5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteCD5 (sound){
    sound = "../assets/sounds/" +"cd5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteD5 (sound){
    sound = "../assets/sounds/" +"d5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteDE5 (sound){
    sound = "../assets/sounds/" +"de5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteE5 (sound){
    sound = "../assets/sounds/" +"e5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteF5 (sound){
    sound = "../assets/sounds/" +"f5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteFG5 (sound){
    sound = "../assets/sounds/" +"fg5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteG5 (sound){
    sound = "../assets/sounds/" +"g5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteGA5 (sound){
    sound = "../assets/sounds/" +"ga5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteA5 (sound){
    sound = "../assets/sounds/" +"a5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteAB5 (sound){
    sound = "../assets/sounds/" +"ab5.mp3";
    sound && ( new Audio(sound) ).play()
  }
  startTheNoteB5 (sound){
    sound = "../assets/sounds/" +"b5.mp3";
    sound && ( new Audio(sound) ).play()
  }
/*do do do fa la
do do do fa la
fa fa mi mi re re do

do do do mi sol
do do do mi sol
do' re' do' sib la sol fa*/
}

