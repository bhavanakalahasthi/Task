import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoggedInComponent } from './logged-in/logged-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoggedInComponent,

  ],
  imports: [BrowserModule, 
  ReactiveFormsModule,
   FormsModule, 
   HttpModule, 
   RouterModule.forRoot([
{path:'login', component: LoginComponent},
{path: 'register', component: RegisterComponent },
{path: 'home', component: HomeComponent},
{ path: 'loggedin', component: LoggedInComponent }

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
