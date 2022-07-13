import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUri: string = '/api';

  constructor(private http:HttpClient) { }
  getbooks()
  {   
    
    return this.http.get(`${this.baseUri}/books`)

  }

  getbook(id:any)
  {   
    return this.http.get(`${this.baseUri}/books/`+id);
  }
}
