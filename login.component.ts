import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

form: FormGroup;
  loginUser(form) {
    console.log(form.value);

}
  constructor(private router: Router) { }

  ngOnInit() {

  this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')]),
      psw: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      
 
   
    });
  }
loginUser(){
 

  
    this.router.navigate(['/loggedin']);
  } 
