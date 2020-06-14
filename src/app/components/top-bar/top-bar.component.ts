import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    // check auth is true or false to display btn logout
    // true -> logout
    // false -> null
    if (this.isAuthenticated !== this.authService.getAuthenticate()) {
      this.isAuthenticated = this.authService.getAuthenticate();
    }
  }

  logout(): void {
    // remove token at localStorage and redirect view login
    if (this.authService.logout()) {
      this.isAuthenticated = this.authService.getAuthenticate();
      this.router.navigate(['/login']);
    }
  }
}
