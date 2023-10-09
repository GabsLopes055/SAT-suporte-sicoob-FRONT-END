import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { automation } from 'src/app/interfaces/automations.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AutomationServiceService {

  url = environment.baseUrlBackend;

  constructor(private http: HttpClient, private message: MatSnackBar) { }

  showMessage(message: string, color: string) {
    this.message.open(message, "", {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: color
    })
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.message, "error")
    return EMPTY;
  }

  listAllAutomations(): Observable<automation[]> {
    return this.http.get<automation[]>(this.url + "/automation").pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

  saveAutomation(file: File): Observable<automation> {

    const formData: FormData = new FormData();

    formData.append('file', file, file.name)

    return this.http.post<automation>(this.url + '/automation', formData).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

  public downloadFile(cdAutomation: number): Observable<Blob> {

    return this.http.get<Blob>(this.url + "/automation/downloadAutomation/" + cdAutomation, { responseType: 'blob' as 'json' }).pipe(

      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public deleteAutomationById(cdAutomation: number | any): Observable<any> {
    return this.http.delete(this.url + "/automation/" + cdAutomation).pipe(
      map((response) => response)
    )
  }



}
