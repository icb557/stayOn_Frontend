import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostComponent } from './pages/post/post.component';
export const routes: Routes = [{
    title: 'Home',
    path: '',
    component: HomeComponent,
},
{
    title: 'login',
    path: 'login',
    component: LoginComponent,

}, {
    title: 'register',
    path: 'register',
    component: RegisterComponent
}, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}, {
    title: 'post',
    path: 'post/:id',
    component: PostComponent
}];
