import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { SignInComponent } from './../components/sign-in/sign-in.component';
import {SignUpComponent } from './../components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './../components/verify-email/verify-email.component';

import { HomeComponent } from './../components/home/home.component';
import { PositiveComponent } from './../components/positive/positive.component';
import { NegativeComponent } from './../components/negative/negative.component';

//list 
import { UserListComponent } from '../components/admin/user-list/user-list.component';
import { PositiveListComponent } from '../components/admin/positive-list/positive-list.component';
import { NegativeListComponent } from '../components/admin/negative-list/negative-list.component';

//details
import { UserDetailsComponent } from '../components/admin/user-details/user-details.component';
import { PositiveDetailsComponent } from '../components/admin/positive-details/positive-details.component';
import { NegativeDetailsComponent } from '../components/admin/negative-details/negative-details.component';

//gaurd
import { AuthGuard } from './../gaurd/auth.guard';
import { AdminAuthGuardService } from './../service/admin-auth-guard.service';

import { StaySafeComponent } from '../components/stay-safe/stay-safe.component';
import { ThankYouComponent } from '../components/thank-you/thank-you.component';

const routes: Routes = [
//Auth
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
//Main Components
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  {path:'positive', component: PositiveComponent,canActivate: [AuthGuard]},
  {path:'negative', component: NegativeComponent,canActivate: [AuthGuard]},

  {path:'stay-safe', component: StaySafeComponent,canActivate: [AuthGuard]},
  {path:'thank-you', component: ThankYouComponent,canActivate: [AuthGuard]},

  //Admin Routes
  { path: 'user-list', component: UserListComponent },  
  { path: 'positive-list', component: PositiveListComponent , canActivate: [AuthGuard,AdminAuthGuardService]},
  { path: 'negative-list', component: NegativeListComponent ,  canActivate: [AuthGuard,AdminAuthGuardService]},

  {
    path: "positive-details/:id",
    component: PositiveDetailsComponent,
    canActivate: [AuthGuard,  AdminAuthGuardService],
  },
  {
    path: "negative-details/:id",
    component: NegativeDetailsComponent,
    canActivate: [AuthGuard,AdminAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
