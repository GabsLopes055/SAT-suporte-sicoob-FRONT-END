import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from 'src/app/interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceRegister {

  constructor(private httpClient: HttpClient, private message: MatSnackBar) { }

  showMessage(msg: string, color: string) {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.error['error'], "error")
    // console.log()
    return EMPTY;
  }

  public createdNewUser(newUser: User): Observable<User>{
    return this.httpClient.post<User>(`${environment.baseUrlBackend}/users`, newUser).pipe(
      map((newUser) => newUser),
      catchError((e) => this.errorHandler(e) )
    )
  }


}
