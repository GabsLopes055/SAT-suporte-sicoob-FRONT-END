import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private message: MatSnackBar) { }

  showMessage(msg: string, color: string): void {
    this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    });
  }

  errorHandler(e: any): Observable<any> {
    if (e.status == 400) {
      this.showMessage("Senha incorreta.", "warning")
    } else if (e.status == 401) {
      this.showMessage("Usuário Desativado. Peça para um de nossos administradores permitir a sua entrada.", "secondary")
    } else if (e.status == 404) {
      this.showMessage("Usuário não encontrado.", "error")
    } else if (e.status == 500) {
      this.showMessage("Erro interno do servidor.", "error")
    }    
    return EMPTY;
  }


  public listAllUsers(): Observable<User[]> {

    const url = `${environment.baseUrlBackend}/users`

    return this.http.get<User[]>(url).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public deleteUser(idUser: number): Observable<any> {

    const url = `${environment.baseUrlBackend}/users/${idUser}`;

    return this.http.delete<any>(url).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public edituser(user: User): Observable<User> {

    const url = `${environment.baseUrlBackend}/users/${user.cdUser}`;

    return this.http.put<User>(url, user).pipe(
      map((response) => response,
        catchError((e) => this.errorHandler(e))
      )
    )

  }

}
