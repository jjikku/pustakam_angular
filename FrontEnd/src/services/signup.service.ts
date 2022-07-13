import { Injectable } from '@angular/core';
import { HttpClient ,HttpBackend, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUri: string = '/api';

  constructor(private http:HttpClient) { }

  signUp(item:any)
  {   
    console.log(item);
    return this.http.post<any>(`${this.baseUri}/signup`,{"signup":item})
  }

}
