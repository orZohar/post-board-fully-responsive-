import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    const user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.subscriptions.add(this.authService.login(user).subscribe(() => {
      this.router.navigate(['board']);
    }))
  }

  ngOnDestory() {
    this.subscriptions.unsubscribe();
  }
}