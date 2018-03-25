import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
//npm install: "firebase angularfire2", 
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

//environment
import { environment } from '../environments/environment';

//Components: "ng g c ..."
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { AuthService } from './services/auth.service';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

//Service: "ng g s services/product"

//Model: "ng g cl models/product model"


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    FooterComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule,
    FlashMessagesModule
   
  ],
  providers: [ProductService, AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
