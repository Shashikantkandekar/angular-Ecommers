import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  getAllProducts():Observable<any>{
    return this.http.get<any[]>("http://localhost:3000/data");
  }

  addToCart(obj:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/value",obj);
  }

}
