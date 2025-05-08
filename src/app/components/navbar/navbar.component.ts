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

  constructor(private router: Router) {}

  ngOnInit(): void {
    const name = localStorage.getItem('firstName');
    if (name) {
      this.userName = name;
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
