import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterLink ,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
/*   email = new FormControl('');
  password = new FormControl('') */

 loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl(''),
  });


  


  constructor(private router:Router){}

  login(){
  console.log(this.loginForm.value);
  this.router.navigateByUrl('/dashboard')
    
  }
}
