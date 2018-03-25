import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

//Login by Email to Admin Page
  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then ( (res) => {
      this.flashMessage.show('LoggedIn Success.!', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/products']);
    }).catch( (err) => {
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timeout: 8000});
      
      this.router.navigate(['/users']);
    });
  }

  //Login by Google Account to User Page
  onClickGoogleLogin(){
    this.authService.loginGoogle()
    .then( (res) => {
      this.router.navigate(['/products']);
    }).catch( err => console.log(err.message));
  }

  onClickFacebookLogin(){
    this.authService.loginFacebook()
    .then( (res) => {
      this.router.navigate(['/products']);
    }).catch( err => console.log(err.message));
  }



}