import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogin: any;

  constructor(private message: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, color: string) {
    this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    })
  }

  errorHandler(e: any): Observable<any> {
    if (e.status == 402) {
      this.showMessage("Senha incorreta.", "warning")
    } else if (e.status == 401) {
      this.showMessage("Usuário Desativado. Peça para um de nossos administradores permitir a sua entrada.", "primary")
    } else if (e.status == 404) {
      this.showMessage("Usuário não encontrado.", "error")
    } else if (e.status == 500) {
      this.showMessage("Erro interno do servidor.", "error")
    }
    return EMPTY;
  }

  public login(username: string, password: string): Observable<any> {

    const url = `${environment.baseUrlBackend}/login`;

    return this.http.post(url, {username, password}, { responseType: 'text' }).pipe(
      map((response) =>
        this.setTokenLocalStorage(response),
        sessionStorage.setItem('login', username)),

      catchError((e) => this.errorHandler(e.message)
      ))



    // return this.http.post<String>(url, { username, password }, { responseType: 'json' }).pipe(
    //   map((obj) => 
    //   this.setTokenLocalStorage(obj), 
    //   sessionStorage.setItem('login', username)),
    //   catchError((e) => this.errorHandler(e))
    // )
  }

  public resetPasswordByUser(passwordRequest: any): Observable<any> {

    const username = passwordRequest.username;

    const url = `${environment.baseUrlBackend}/users/password/${username}`;

    return this.http.put<any>(url, passwordRequest).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public getToken(): string | null {
    return sessionStorage.getItem(environment.token)
  }

  public getexpirationDate(): any | null {
    return sessionStorage.getItem(environment.expirationDate)
  }

  public removerTokenLocalStorage(): void {
    sessionStorage.removeItem(environment.token);
    sessionStorage.removeItem(environment.expirationDate)
    sessionStorage.removeItem('login')
  }

  private setTokenLocalStorage(response: any): any {

    // console.log(response)

    const token = response['token'];

    const expiration = new Date().getTime() + 2000000;

    sessionStorage.setItem(environment.token, response);
    sessionStorage.setItem(environment.expirationDate, expiration.toLocaleString());

  }


}
