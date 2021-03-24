import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})


export class AppComponent implements DoCheck{
  title = 'task-planer';
  userLogin: boolean =  false;

  constructor(private authService: AuthService) {
    console.log(this.userLogin + 'header')
    this.userLogin = this.authService.isAuth()

  }

  ngDoCheck(): void {
    this.userLogin = this.authService.isAuth()
  }



}
