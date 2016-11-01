import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './auth/login.component';
import { HomeComponent }   from './home.component';
import { routing } from './app.routes';
import { AuthService } from './auth//auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthService, AuthGuard ]
})
export class AppModule { }