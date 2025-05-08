import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profileservice } from '../../services/profile.service';
import { Profile } from '../../interfaces/profile';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile: Profile= {} as Profile
  userId: string= ''

  constructor(private aRouter: ActivatedRoute, private _profileService: Profileservice, private router: Router) {
    this.userId = this.aRouter.snapshot.paramMap.get('userId')!
  }

  ngOnInit(): void {
    this.aRouter.paramMap.subscribe(params => {
      this.userId = params.get('userId')!;
      this.getProfile();
    });
  }

  showPost(id: number) {
    this.router.navigate([`/post/${id}`])
  }

  showProfile(id: string) {
    this.router.navigate([`/profile/${id}`])
    console.log(`/profile/${id}`)
  }
  
  getProfile(){
    this._profileService.getProfile(this.userId).subscribe({
      next: (data) => {
        this.profile = data
        console.log(data)
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
}
