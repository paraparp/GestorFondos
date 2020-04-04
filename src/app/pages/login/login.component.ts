import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }


  loginform: FormGroup;
  user: Usuario;
  loginInvalido: boolean = false;

  ngOnInit() {

    if (this.auth.isUserLoggedIn()) {
      this.router.navigate(["/user"]);
    }

    this.loginform = new FormGroup({
      username: new FormControl('dobarqueiro', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('12345', [Validators.required, Validators.minLength(4)])
    });

  }

  login(user): void {
    this.auth.login(user).subscribe(resp => {

      this.auth.guardarUser(resp.access_token);
      this.auth.guardarToken(resp.access_token);
      user = this.auth.usuario;
      console.log(resp);
      this.router.navigate(["/user"]);
    }, err => {
      if (err.status == 400)
        this.loginInvalido = true;

    })
  }


}