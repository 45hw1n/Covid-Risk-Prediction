import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { appUser } from "./../../service/user";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appUser: appUser;
  constructor(public authService: AuthService) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }


}
