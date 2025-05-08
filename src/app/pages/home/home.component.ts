import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = []
  currentSlideIndex = 0;
  slides!: NodeListOf<Element>;
  constructor(private _postService: PostService , private router: Router) {}

  ngOnInit(): void {
    this.getPost()
    this.slides = document.querySelectorAll('.carousel-slide');
  this.showSlide(this.currentSlideIndex);
  this.startCarousel();
  }

  showProfile(id: string) {
    this.router.navigate([`/profile/${id}`])
    console.log(`/profile/${id}`)
  }
  
  startCarousel() {
    setInterval(() => {
      this.nextSlide();
    }, 8000); 
  }
  
  showSlide(index: number) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.slides[index].classList.add('active');
  }
  
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.showSlide(this.currentSlideIndex);
  }

  showPost(id: number) {
    this.router.navigate([`/post/${id}`])
  }

  getPost(){
    this._postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data
      }, error: (e: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error ocurred while retrieving post",
          footer: "Please try again later",
          showConfirmButton: false,
          timer: 4000
        });
        if (e.status === 404) {
          console.error('"No posts available."', e);
        } else {
          console.error('An error occurred while retrieving post', e);
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
  user = ""
  searchUser() {
    if (this.user !== "") {
      window.location.href = `/search?query=${this.user}`
    }
  }
}