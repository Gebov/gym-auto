import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IUser } from './user.interface';

@Injectable()
export class AuthService {
    public isLoggedIn(): boolean {
        return true;
    }

    public login(user: IUser) : Observable<boolean> {
        if (user.email === 'test' && user.password == 'test') {
            return Observable.of(true);
        }

        return Observable.of(false);
    }
}