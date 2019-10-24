import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }
  
  createUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res) => {
      console.log('Bien');
      console.log(res);
    }).catch( (err) => {
      console.log(err);
    });
  }
}
