import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public email: string;
  public password: string;
  
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then( (res) => {
      this.flashMessage.show('Register Success.!', 
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/products']);
    }).catch( (err) => {
      this.flashMessage.show(err.message, 
        {cssClass: 'alert-danger', timeout: 8000});
    });
  }

}
