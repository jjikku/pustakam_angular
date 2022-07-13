import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AddbookService {
  baseUri: string = "/api";

  constructor(private http: HttpClient) {}
  addbook(book: any) {
    return this.http.post(`${this.baseUri}/books/addbook`, { book: book });
  }
}
