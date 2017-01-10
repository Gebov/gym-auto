import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserData } from "./../state/users.model";
import { CrudService } from "./../../../../../services/crud.service";

@Injectable()
export class UsersService extends CrudService<UserData> {
	constructor(http: Http) {
		super("users", "email", http);
	}
}
