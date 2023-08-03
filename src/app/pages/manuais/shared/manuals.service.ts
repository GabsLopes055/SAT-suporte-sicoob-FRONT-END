import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { manual } from 'src/app/interfaces/manuals.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManualsService {

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
    return EMPTY;
  }

  public listAllManuals(): Observable<manual[]> {
    return this.http.get<manual[]>(environment.baseUrlBackend + "/manual").pipe(
      map(response => (response)),
      catchError((e) => this.errorHandler(e))
    )
  }

  public createNewManual(file: File, cdCategory: number): Observable<manual> {

    
    const formData: FormData = new FormData();
    
    formData.append('file', file, file.name)
    formData.append('cdCategory', cdCategory.toString())
    
    // const manual: [File, number] = [formData, cdCategory]

    return this.http.post<manual>(this.url + '/manual', formData).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

}
