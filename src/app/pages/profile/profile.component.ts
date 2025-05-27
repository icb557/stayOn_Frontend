import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profileservice } from '../../services/profile.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Profile } from '../../interfaces/profile';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile: Profile= {} as Profile
  userId: number = 0
  showUserForm= false 

  
  constructor(private aRouter: ActivatedRoute, private _profileService: Profileservice, private _userService: UserService, private router: Router) {
  }

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    lastName: new FormControl('', [Validators.required]),
    secondLastName: new FormControl(''),
    major: new FormControl('', [Validators.required]),
    age: new FormControl<number | null>(null, [Validators.required])
  })

  ngOnInit(): void {
    this.aRouter.paramMap.subscribe(params => {
      this.userId = +params.get('userId')!;
      this.getProfile();
    });
  }

  showPost(id: number) {
    this.router.navigate([`/post/${id}`])
  }

  showProfile(id: number) {
    this.router.navigate([`/profile/${id}`])
  }

  updateProfile(){
    this.showUserForm= true
    this.userForm.setValue({
    firstName: this.profile.firstName,
    middleName: this.profile.middleName,
    lastName: this.profile.lastName,
    secondLastName: this.profile.secondLastName,
    major: this.profile.major,
    age: this.profile.age
    })
  }
  saveData() {
    if (!this.userForm.valid) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, complete todos los campos',
        icon: 'error',
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }
  
    const user = this.userForm.value as User;
    this._userService.updateUser(this.userId, user).subscribe({
      next: (data) => {
        this.showUserForm = false;
        this.userForm.reset();
        this.getProfile();
        Swal.fire({
          title: 'Usuario actualizado',
          icon: 'success',
          showConfirmButton: false,
          timer: 1200,
        });
      },
      error: (e: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error!',
          text: 'Ha ocurrido un error',
          icon: 'error',
          showConfirmButton: false,
          timer: 1200,
        });
      },
    });
  }
  cancelEdit() {
    this.showUserForm=false
    this.userForm.reset();
  }

  getProfile(){
    this._profileService.getProfile(this.userId).subscribe({
      next: (data) => {
        this.profile = data
      }, error: (e: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error ocurred while retrieving your profile data",
          footer: "Please try again later",
          showConfirmButton: false,
          timer: 4000
        });
        if (e.status === 404) {
          console.error('Profile not found', e);
        } else {
          console.error('An error occurred while retrieving your profile data', e);
        }
      }
    })
  }
  formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    const day = date.getDate();
    const month = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date);
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });

    return `${day} de ${month}, ${year} • ${time}`;
  }

  myProfile() {
    const currentUserId = localStorage.getItem('id');
    return currentUserId && this.userId === +currentUserId;
  }

 
}