import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EditbookService {
  baseUri: string = '/api';

  constructor(private http:HttpClient) { }
  editbook(id:any, book:any)
  {   
    console.log("editbook service = "+id,book)
    return this.http.post(`${this.baseUri}/editbook/`+id,{"book":book});
  }
}

