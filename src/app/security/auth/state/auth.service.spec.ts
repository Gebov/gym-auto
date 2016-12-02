// import { AuthService } from './auth.service';
// import { inject, TestBed } from '@angular/core/testing';

// describe("A suite", () => {
// 	beforeEach(() => TestBed.configureTestingModule({
// 		providers: [AuthService]
// 	}));

// 	function assertLogin(auth: AuthService, result: boolean) {
// 		spyOn(auth, 'checkUser').and.returnValue(result);
// 		auth.login({ email: 'test', password: 'test' }).subscribe(x => {
// 			expect(auth.isLoggedIn()).toBe(result);
// 			expect(x).toBe(result);
// 		})
// 	}

// 	it("successfully logging a user will set the isLoggedIn flag to true", inject([AuthService], (auth: AuthService) => {
// 		assertLogin(auth, true);
// 	}));

// 	it("unsuccessfully logging a user will set the isLoggedIn flag to true", inject([AuthService], (auth: AuthService) => {
// 		assertLogin(auth, false);
// 	}));

// 	it("asserts dummy credentials login", inject([AuthService], (auth: AuthService) => {
// 		auth.login({email: 'test@test.com', password: 'test'}).subscribe(x => {
// 			expect(x).toBe(true);
// 		});

// 		auth.login({email: 'asd', password: 'asd'}).subscribe(x => {
// 			expect(x).toBe(false);
// 		});
// 	}));
// });
