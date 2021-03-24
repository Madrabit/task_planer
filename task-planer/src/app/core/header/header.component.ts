import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = 'Anton'

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  exit() {
    this.authService.logOut()
  }
}
