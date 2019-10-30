import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public confirmPassword: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
  }
  
  createUser(){
    if( this.password == this.confirmPassword) {
      this.authService.registerUser(this.email, this.password)
      .then( (res) => {
      //Welcome to Piammy! In the upper right corner you can find a Tutorial to start the game. Enjoy it! :)
        this.flashMessage.show('Thanks for creating your account, we sent you an email to verificate your account.', {cssClass: 'alert', timeout: 60000});
        this.router.navigate[('/home')];
      }).catch( (err) => {
        this.flashMessage.show(err.message, {cssClass: 'alert', timeout: 60000});
      })
    }
  }
  userValidation(){
    this.authService.userVerification(this.email);
  }
}