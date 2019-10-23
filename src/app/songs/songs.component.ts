import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-la-cucaracha',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  Songs: Object = {
   
    LaCucaracha: ["c4", "c4", "c4", "f4", "a4",
      "c4", "c4", "c4", "f4", "a4",
      "f4", "f4", "e4", "e4", "d4", "d4", "c4",

      "c4", "c4", "c4", "e4", "g4",
      "c4", "c4", "c4", "e4", "g4",
      "c5", "d5", "c5", "ab4", "a4", "g4", "f4"],
   
    ItsyBitsySpider: [
      "g4", "c5", "c5", "c5", "d5", "e5", "e5",
      "e5", "d5", "c5", "d5", "e5", "c5",
      "e5", "e5", "f5", "g5",

      "g5", "f5", "e5", "f5", "g5", "e5",
      "c5", "c5", "d5", "e5",
      "e5", "d5", "c5", "d5", "e5", "c5",
      "g4", "g4", "c5", "c5", "c5", "d5", "e5", "e5",
      "e5", "d5", "c5", "d5", "e5", "c5"
    ],
    RowYourBoat: [
      "d4", "d4", "d4", "e4", "fg4",
      "fg4", "e4", "fg4", "g4", "a4",
      "d5", "d5", "d5", "a4", "a4", "a4", 
      "fg4", "fg4", "fg4", "d4", "d4", "d4",
      "a4", "g4", "fg4", "e4", "d4"
    ],
    Rugrats: [
      "e4", "f4", "g4", "a4", "b4", "c5",
      "b4", "g4", "a4", "g4", "f4",
      "e4", "f4", "g4", "a4", "b4", "c5", "d5",
      "b4", "c5", "b4", "a4",
      "e4", "f4", "g4", "a4", "b4", "c5",
      "b4", "g4", "a4", "g4", "f4",
      "e4", "f4", "g4", "a4", "b4", "c5", "d5",
      "c5", "b4", "a4", "g4", "f4", "e4", "b4", "c5"

    ]
  }
  constructor() { }

  ngOnInit() {
  }

  public getSong(song){
    return this.Songs[song]
  }
  public addSong(notesArray){
    this.Songs["test"] = notesArray;
  }
    //h1: el usuario necesita un boton para elegir la canción
    //h2: cuando de click en el boton de la canción la primer nota se pondrá en otro color
    //h3: si el usuario presiona la tecla correcta, la siguiente tecla del array se pondrá de color también,
    //y la primera tecla volverá a su color original (blanco)
    //h4: si el usuario no presiona la tecla correcta, no cambia de color hasta que la presione
  }
