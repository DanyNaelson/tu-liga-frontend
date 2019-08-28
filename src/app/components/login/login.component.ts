import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user: UserModel;
  remember_me: Boolean;

  constructor() { }

  ngOnInit() {
    this.user = new UserModel()
    this.remember_me = false
  }

  onSubmit(form: NgForm) {
    if(form.invalid) return;

    //TO DO: send info to server
  }

}
