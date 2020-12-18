import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-stay-safe',
  templateUrl: './stay-safe.component.html',
  styleUrls: ['./stay-safe.component.scss']
})
export class StaySafeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}