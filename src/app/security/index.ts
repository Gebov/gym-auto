
import { LoginComponent } from './login/login.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { RegisterComponent } from './register/register.component'

export * from "./auth/index";
export const AUTH_COMPONENTS = [
	LoginComponent, RegisterComponent, CurrentUserComponent
]
