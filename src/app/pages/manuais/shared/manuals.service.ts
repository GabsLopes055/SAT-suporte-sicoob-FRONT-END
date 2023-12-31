import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  showMessage(msg: string, color: string): void {
    this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.message, "error")
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

    return this.http.post<manual>(this.url + '/manual', formData).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

  public editManual(file: File, docName: any, docData: Blob, cdCategory: number, fileId: number | undefined): Observable<manual> {

    const formData: FormData = new FormData();

    if (file) {
      formData.append('file', file, file.name)
      formData.append('cdCategory', cdCategory.toString())
    } else {
      formData.append('file', docData, docName)
      formData.append('cdCategory', cdCategory.toString())
    }

    return this.http.put<manual>(this.url + '/manual/edit/' + fileId, formData).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

  public downloadFile(cdManual: number): Observable<Blob> {

    return this.http.get<Blob>(this.url + "/manual/downloadManual/" + cdManual, { responseType: 'blob' as 'json' }).pipe(

      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public deleteManual(fileId: number | undefined): Observable<any> {
    return this.http.delete(this.url + "/manual/" + fileId, { responseType: 'text' }).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

}
