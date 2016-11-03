import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user';

@Injectable()
export class AuthService {
    private isLoggedInField: boolean = false;

    public isLoggedIn(): boolean {
        return this.isLoggedInField;
    }

    public login(user: IUser) : Observable<boolean> {
        return new Observable((subsciber) => {

            // simulate http call
            Observable.timer(10).subscribe((innerSubsciber) => {
                if (user.email === 'test' && user.password == 'test') {
                    this.isLoggedInField = true;
                }
                
                subsciber.next(this.isLoggedInField);
                subsciber.complete();
            }, () => {
                console.log("error");
            });
        })
    }
}