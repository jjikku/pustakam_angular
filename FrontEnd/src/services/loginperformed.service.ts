import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginperformedService {
   loginPerformed = false;
   baseUri: string = '/api';

  constructor(private http: HttpClient) { }
  login(item:any)
  {    

      return this.http.post<any>(`${this.baseUri}/login`,{"login":item})

  }

  
}

