import { Injectable } from '@angular/core';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { software } from 'src/app/interfaces/softwares.model';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwaresService {

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

  public createNewSoftware(software: software): Observable<software> {

    return this.http.post<software>(this.url + '/softwares', software).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )


  }

  public listAllSoftware(): Observable<software[]> {


    return this.http.get<software[]>(this.url + '/softwares')

  }

  public editSoftware(software: software): Observable<software> {

    const url = `${environment.baseUrlBackend}/softwares/${software.cdsoftware}`;

    return this.http.put<software>(url, software).pipe(
      map((response) => response,
        catchError((e) => this.errorHandler(e))
      )
    )

  }

  public deleteSoftware(cdsoftware: number): Observable<any> {

    const url = `${environment.baseUrlBackend}/softwares/${cdsoftware}`;

    return this.http.delete(url, {responseType: 'text'}).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }


}
