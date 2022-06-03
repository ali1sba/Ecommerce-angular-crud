import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

const baseUrl = 'http://localhost:4200/api/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceAPI {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Product[]> {
    return this.http.get<any>(baseUrl).toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { console.log(data); return data; });
  }

  get(id: any): Observable<Product> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?title=${title}`);
  }
}
