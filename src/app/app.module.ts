import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentest/home-page/home-page.component';
import { RegisterPageComponent } from './componentest/register-page/register-page.component';
import { NavbarComponent } from './componentest/navbar/navbar.component';
import { LoginPageComponent } from './componentest/login-page/login-page.component';
import { NotFoundPageComponent } from './componentest/not-found-page/not-found-page.component';
import { FooterComponent } from './componentest/footer/footer.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { AdminPageComponent } from './componentest/admin-page/admin-page.component';
import { UserPageComponent } from './componentest/user-page/user-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    NavbarComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    FooterComponent,
    AdminPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
