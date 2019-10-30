import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public email: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  sendEmail(){
    this.authService.resetPassword(this.email)
    .then( (res) => {
      this.flashMessage.show('Check your Email! :)', {cssClass: 'alert', timeout: 60000});
    }).catch( (err) => {
      this.flashMessage.show(err.message, {cssClass: 'alert', timeout: 60000});

    });
  }
}
