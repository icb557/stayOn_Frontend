import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../interfaces/post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  id: number = 0
  post: Post = {} as Post

  constructor(private aRouter: ActivatedRoute, private _postService: PostService) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id')!)
  }
  
  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this._postService.getPostById(this.id).subscribe({
      next: (data) => {
        this.post = data
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
          console.error('Post not found', e);
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
}
