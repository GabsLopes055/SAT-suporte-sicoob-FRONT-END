import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryOfManualsService {

  url = environment.baseUrlBackend;

  constructor(
    private http: HttpClient,
    private message: MatSnackBar
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['.msg-error'] : ['.msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.message, true)
    // console.log()
    return EMPTY;
  }

  public listAllCategory(): Observable<category[]> {
    return this.http.get<category[]>(environment.baseUrlBackend + "/category").pipe(
      map(response => (response)),
      catchError((e) => this.errorHandler(e))
    );
  }

  public createCategory(category: category): Observable<category> {
    return this.http.post<category>(environment.baseUrlBackend + "/category", category).pipe(
      map(response => (response)),
      catchError((e) => this.errorHandler(e))
    )
  }

}
