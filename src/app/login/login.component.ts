import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router)
  // constructor(private router:Router){}


  loginObj: any = {
    email: '',
    password: '',
  };

  onLogin() {
    if (
      this.loginObj.email == 'admin@gmail.com' &&
      this.loginObj.password == "admin@gmail.com"
    ) {
      this.router.navigateByUrl('/one');
      localStorage.setItem('empErpUser', this.loginObj.email);
    } else {
      alert('Wrong Credenntials');
    }
  }
}
