import { Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'one', component: OneComponent },
  // { path: 'two', component: TwoComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'one', component: OneComponent, canActivate:[authGuard] },
      { path: 'two', component: TwoComponent,  canActivate:[authGuard] },
    ],
  },
];
