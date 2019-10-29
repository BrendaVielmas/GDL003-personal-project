import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  faFacebook= faFacebook;
  faGoogle= faGoogle;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  loginEmail(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMessage.show('So good to see you again! :)', {cssClass: 'alert', timeout: 5000});
      this.router.navigate(['/home']);
    }).catch( (err) => {
      this.flashMessage.show(err.message, {cssClass: 'alert', timeout: 5000});
      this.router.navigate(['/']);
    });
  }
}
