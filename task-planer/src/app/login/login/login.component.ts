import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name!: string;
  password!: string;


  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let check = this.authService.check(new User(this.name, this.password));
    if (check) {
      this.authService.setLogged()
      this.router.navigate(['tasks'])
    }

  }
}
