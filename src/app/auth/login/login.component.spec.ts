import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form group number of inputs', () => {
    const form = fixture.debugElement.nativeElement.querySelector('.login-form');
    const inputElements = form.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('check init values of the login form', () => {
    expect(component.loginForm.value).toEqual({username:"", password:""})    
  });

  it('check username value after entering some value', () => {
    
   const usernameNative = fixture.debugElement.nativeElement.querySelector('.login-form').querySelectorAll('input')[0];
   usernameNative.value = "a"
    usernameNative.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      const username = component.loginForm.get('username');
      expect(usernameNative.value).toEqual(username.value)    
    })

  });

  it('is login form valid', () => {
    const usernameNative = fixture.debugElement.nativeElement.querySelector('.login-form').querySelectorAll('input')[0];
    const passwordNative = fixture.debugElement.nativeElement.querySelector('.login-form').querySelectorAll('input')[1];

    usernameNative.value = "asss"
    passwordNative.value = "as"

     usernameNative.dispatchEvent(new Event('input'));
     passwordNative.dispatchEvent(new Event('input'));

      const loginForm = component.loginForm.valid;
      console.log(component);

      fixture.whenStable().then(() => { 
        expect(loginForm).toBeTruthy();
     })
 
   });
 

});
