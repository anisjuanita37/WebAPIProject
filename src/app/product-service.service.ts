import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http:HttpClient) { }
  baseurl = "http://localhost:8080";

  getProductList(): Observable<any>{
    return this.http.get(this.baseurl + '/products');
  }

  
}
