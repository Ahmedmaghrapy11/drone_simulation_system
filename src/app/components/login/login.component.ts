import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }
  email: string = ''
  password: string = ''



  login() {
    this.auth.login(this.email, this.password)
  }



  ngOnInit(): void { }
}