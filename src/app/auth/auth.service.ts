import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor() { }

  // user is our "token" cuze we don't have a backend
  hasToken(): boolean {
    return !!localStorage.getItem('user');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login(user) {
    this.updateLocalStorage(user);
    this.isLoginSubject.next(true)
    return of(new HttpResponse({ status: 200 }))
  }

  updateLocalStorage(user) {
    // update local storage
    localStorage.setItem('user', JSON.stringify(user));
    // respond 200 OK
    return of(new HttpResponse({ status: 200 }));
  }


}

