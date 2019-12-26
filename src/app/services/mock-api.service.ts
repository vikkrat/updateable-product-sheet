import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// ---------------------------------------------------
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MockAPIService {
  private mockURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-type': 'application/json'
      })
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.mockURL}product`);
  }

  loadСategories(): Observable<any> {
    return this.http.get(`${this.mockURL}category`);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(`${this.mockURL}product`, JSON.stringify(newProduct), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
    console.log('New Product:', newProduct);
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
