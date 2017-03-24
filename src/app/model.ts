import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    isLoggedIn: string;
    user: any = { name: 'Chandler' };
}
