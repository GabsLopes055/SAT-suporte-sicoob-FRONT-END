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

  public showMessage(msg: string) {
    return this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  public errorHandler(e: any): Observable<any> {
    this.showMessage(e.error.message);
    console.log(e)
    return EMPTY
  }

  public listAllInformations(): Observable<information[]> {
    return this.http.get<information[]>(this.url + "/information")
  }

  public createNewInformation(file: File, title: string, description: string, content: string): Observable<information> {

    const formData: FormData = new FormData();

    if(file) {
      formData.append('file', file, file.name)
    }
    
    formData.append('title', title.toString())
    formData.append('description', description.toString())
    formData.append('content', content.toString())


    return this.http.post<information>(this.url + "/information", formData).pipe(
      map( response => response),
      catchError((e) => this.errorHandler(e))
    )

  }

}
