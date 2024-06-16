import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://localhost:7231/api/Products';

  public GetProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.apiUrl);
  }
  public GetProduct(id: number): Observable<Product> {

    return this.http.get<Product>(this.apiUrl + '/' + id);
  }
  public SaveProduct(product: any): Observable<any> {

    return this.http.post(this.apiUrl, product);
  }
  public UpdateProduct(product: Product): Observable<Product> {

    return this.http.put<Product>(this.apiUrl + '/' + product.id, product);
  }
  public DeleteProduct(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }

  public GetTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetTypes");
  }

  public GetSize(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetSize");
  }
}
