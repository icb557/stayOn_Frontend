import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  users: User[] = [];
  filteredUsers: User[] = [];
  query = ''
  constructor(private _userService: UserService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.filteredUsers = this.getfilteredUsers()
    });
  }

  getfilteredUsers(): User[] {
    const queryLower = this.query.toLowerCase();
    return this.users.filter(user => {
      const fullName = `${user.firstName} ${user.middleName || ''} ${user.lastName} ${user.secondLastName || ''}`.toLowerCase();
      return fullName.includes(queryLower);
    });
  }

  searchUser() {
    this.filteredUsers = this.getfilteredUsers()
  }

  viewUser(userId: number) {
    window.location.href = `/profile/${userId}`
  }

}
