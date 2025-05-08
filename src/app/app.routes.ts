import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostComponent } from './pages/post/post.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    title: 'Forgot Password',
    path: 'forgot-password',
    component: ForgotPasswordComponent
}, {
    title: 'Reset Password',
    path: 'reset-password',
    component: ResetPasswordComponent
}, {
    title: 'post',
    path: 'post/:id',
    component: PostComponent
}, {
    title: 'profile',
    path: 'profile/:userId',
    component: ProfileComponent
}
// , {
//     path: '**',
//     redirectTo: '',
//     pathMatch: 'full'
// }
];
