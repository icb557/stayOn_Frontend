import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostCreate, PostUpdate } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private myAppUrl: string
  private myApiUrl: string

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/post'
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  getPostByUser(userId: string): Observable<Post> {
    return this.http.get<Post>(`${this.myAppUrl}${this.myApiUrl}/user/${userId}`)
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }

  createPost(post: PostCreate): Observable<PostCreate> {
    return this.http.post<PostCreate>(`${this.myAppUrl}${this.myApiUrl}`, post)
  }

  updatePost(id: number, post: PostUpdate): Observable<PostUpdate> {
    return this.http.put<PostUpdate>(`${this.myAppUrl}${this.myApiUrl}/${id}`, post)
  }

}
