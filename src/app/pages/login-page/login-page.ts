import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./login-page.css']
})
export class LoginPageComponent {

  private authService = inject(AuthService);
  private router=inject(Router)

  form = new FormGroup({
    username: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  onSubmit(): void {
    if (this.form.invalid) return;

    this.authService.login(this.form.getRawValue()).subscribe(res=>{
      this.router.navigate([''])
      // next: () => console.log('Login successful'),
      // error: err => console.error(err)
    });
  }
}










// import { Component, inject } from '@angular/core';
// import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
// import { AuthService } from '../../auth/auth.service';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.html',
//   imports: [
//     ReactiveFormsModule
//   ],
//   styleUrls: ['./login-page.css']
// })
// export class LoginPageComponent {
//
//   private authService = inject(AuthService);
//   private router=inject(Router)
//
//   form = new FormGroup({
//     username: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
//     password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
//   });
//
//   onSubmit(): void {
//     if (this.form.invalid) return;
//
//     this.authService.login(this.form.getRawValue()).subscribe(res=>{
//       this.router.navigate([''])
      // next: () => console.log('Login successful'),
      // error: err => console.error(err)
    // });
//   }
// }

