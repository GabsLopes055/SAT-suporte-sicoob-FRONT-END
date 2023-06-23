import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const token = this.loginService.getToken();

        const expirationDate = this.loginService.getexpirationDate()

        if (token && expirationDate) {

            const currentDate = new Date().getMinutes();

            if (expirationDate < currentDate) {
                this.route.navigate(['/']);
                this.loginService.showMessage('Sessão expirada. Por favor refaça o login.')
            }
        }

        if (token === null || expirationDate === null) {
            this.route.navigate(['/']);
            this.loginService.showMessage('Por favor, refaça o login.')
        }

        return true;

    }

}