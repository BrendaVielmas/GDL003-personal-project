import { Component, OnInit } from '@angular/core';
import { SongLaCucarachaComponent } from '../song-la-cucaracha/song-la-cucaracha.component';
@Component({
  providers: [ SongLaCucarachaComponent ],
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  isHighlighted: Object = {};
  songPosition: number = 0;
  currentSong: Array<string> = [];
  constructor(private comp: SongLaCucarachaComponent) { 
  }
  ngOnInit() {
    
  }
  public startSong(): void {
    this.currentSong = this.comp.getSong();
    this.songPosition = 0;
    let key = this.currentSong[this.songPosition];
    this.isHighlighted[key] = true;
  }

  startTheNote (note){
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

}
