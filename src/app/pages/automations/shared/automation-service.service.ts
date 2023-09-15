import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { automation } from 'src/app/interfaces/automations.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AutomationServiceService {

  url = environment.baseUrlBackend;

  constructor(private http: HttpClient, private message: MatSnackBar) { }

  // listAllAutomations(): Observable<automation[]> {
  //   return this.http.get
  // }
  


}
