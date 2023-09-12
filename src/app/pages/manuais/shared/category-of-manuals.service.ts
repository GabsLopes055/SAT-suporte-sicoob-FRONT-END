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

  showMessage(msg: string, color: string): void {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    });
  }

  errorHandler(e: any): Observable<any> {
    if (e.status == 400) {
      this.showMessage("Erro ao excluir categoria !", "error")
    } else if (e.status == 404) {
      this.showMessage("Categoria não encontrada !", "warning")
    } else if (e.status == 500) {
      this.showMessage("Erro interno do servidor !", "error")
    }
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

  public deleteCategory(cdCategory: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrlBackend + "/category/" + cdCategory).pipe(
      map(response => (response)),
      catchError((e) => this.errorHandler(e))
    )
  }

  public editCategory(cdCategory: any, category: category): Observable<category> {
    return this.http.put<category>(environment.baseUrlBackend + "/category/" + cdCategory, category).pipe(
      map(response => (response)),
      catchError((e) => this.errorHandler(e))
    )
  }

}
