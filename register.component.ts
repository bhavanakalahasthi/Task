import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  userList: User[] = [];
  form: FormGroup;
  addUser(form) {
    console.log(form.value);


  }
  constructor() {}
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$')]),
      address: new FormControl('', Validators.required),
      psw: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      
    });
  }