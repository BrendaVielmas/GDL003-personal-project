import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-la-cucaracha',
  templateUrl: './song-la-cucaracha.component.html',
  styleUrls: ['./song-la-cucaracha.component.css']
})
export class SongLaCucarachaComponent implements OnInit {
  songLaCucaracha:Array<string> = [ 
    "c4", "c4", "c4", "f4", "a4",
    "c4", "c4", "c4", "f4", "a4",
    "f4", "f4", "e4", "e4", "d4", "d4", "c4",

    "c4", "c4", "c4", "e4", "g4",
    "c4", "c4", "c4", "e4", "g4",
    "c5", "d5", "c5", "ab4", "a4", "g4", "f4"]
  constructor() { }

  ngOnInit() {
  }

  public getSong(){
    return this.songLaCucaracha
  }
   
    //h1: el usuario necesita un boton para elegir la canción
    //h2: cuando de click en el boton de la canción la primer nota se pondrá en otro color
    //h3: si el usuario presiona la tecla correcta, la siguiente tecla del array se pondrá de color también,
    //y la primera tecla volverá a su color original (blanco)
    //h4: si el usuario no presiona la tecla correcta, no cambia de color hasta que la presione
  }
