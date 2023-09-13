import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { information } from 'src/app/interfaces/information.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  url = environment.baseUrlBackend;

  constructor(
    private http: HttpClient,
    private message: MatSnackBar) { }

  public showMessage(msg: string, color: string) {
    return this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    })
  }

  public errorHandler(e: any): Observable<any> {
    this.showMessage(e.error.message, "error");    
    return EMPTY
  }

  public listAllInformations(): Observable<information[]> {
    return this.http.get<information[]>(this.url + "/information")
  }

  public createNewInformation(file: File, title: string, description: string, content: string): Observable<information> {

    const formData: FormData = new FormData();

    if (file) {
      formData.append('file', file, file.name)
    }

    formData.append('title', title.toString())
    formData.append('description', description.toString())
    formData.append('content', content.toString())


    return this.http.post<information>(this.url + "/information", formData).pipe(
      map(response => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public findInformation(cdInform: any): Observable<any> {

    return this.http.get<any>(this.url + "/information/" + cdInform).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public deleteInformation(cdInform: any): Observable<boolean> {

    return this.http.delete<number>(this.url + "/information/" + cdInform).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public editInformation(
    file: File,
    docData: Blob,
    docName: any,
    title: any,
    description: any,
    content: any,
    cdInform: any): Observable<information> {

    let formData: FormData = new FormData();

    if (file) {
      formData.append('file', file, file.name)
    } else {
      formData.append('file', docData, docName)
    }

    formData.append('title', title)
    formData.append('description', description)
    formData.append('content', content)

    return this.http.put<information>(this.url + "/information/" + cdInform, formData).pipe(
      map((response) => { response }),
      catchError((e) => this.errorHandler(e))
    )

  }



}
