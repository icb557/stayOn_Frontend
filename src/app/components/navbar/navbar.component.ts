import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  userId: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const name = localStorage.getItem('firstName');
    const userId = localStorage.getItem('email');
    if (name) {
      this.userName = name;
      this.userId = userId!;
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToProfile(userId: string): void {
    this.router.navigate([`/profile/${userId}`]);
  }
}
