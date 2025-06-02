import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostComponent } from './pages/post/post.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
<<<<<<< HEAD
import { MeetingComponent } from './pages/meeting/meeting.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
=======
import { TopicComponent } from './pages/topic/topic.component';
import { AboutSupportComponent } from './pages/about-support/about-support.component';
>>>>>>> dd744add2f7de9cceb6f7f6f713e0762c70bea12

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'login',
    path: 'login',
    component: LoginComponent,
  },
  {
    title: 'register',
    path: 'register',
    component: RegisterComponent,
  },
  {
    title: 'Forgot Password',
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    title: 'Reset Password',
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    title: 'post',
    path: 'post/:id',
    component: PostComponent,
  },
  {
    title: 'profile',
    path: 'profile/:userId',
    component: ProfileComponent,
  },
  {
    title: 'search',
    path: 'search',
<<<<<<< HEAD
    component: SearchComponent,
  },
  {
    title: 'meeting',
    path: 'meeting',
    component: MeetingComponent,
  },
  {
    title: 'meettings',
    path: 'meetings',
    component: MeetingsComponent,
  },
  {
=======
    component: SearchComponent
}, {
    title: 'topic',
    path: 'topic/:id',
    component: TopicComponent
}, {
    title: 'about-support',
    path: 'about-support',
    component: AboutSupportComponent,
}, {
>>>>>>> dd744add2f7de9cceb6f7f6f713e0762c70bea12
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
