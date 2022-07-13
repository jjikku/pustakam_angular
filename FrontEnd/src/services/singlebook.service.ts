import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SinglebookService {
  baseUri: string = '/api';

  constructor(private http:HttpClient) { }
  
  readmore(id:any)
  {   
    const params = new HttpParams();
    return this.http.get(`${this.baseUri}/books/`+id);

  }
  editBook(book:any)
  {   
    return this.http.post<any>(`${this.baseUri}/singlebook/`+book._id, {"book":book});

  }
  deleteBook(id:any)
  {   
    return this.http.delete<any>(`${this.baseUri}/singlebook/`+id);

  }
}
