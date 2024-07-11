import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
productlist:any[]=[]; 
productObj:any ={
"productId": 340,
      "productSku": "",
      "productName": "",
      "productPrice": "",
      "productShortName": "",
      "productDescription": "",
      "createdDate": "",
      "deliveryTimeSpan": "",
      "categoryId": '',
      "productImageUrl": "",
      "categoryName": ""
}
constructor(private productServe:ProductService){

}
ngOnInit(): void {
  this.loadAllProducts();
  

}
loadAllProducts(){
  this.productServe.getAllProducts().subscribe((data)=>{
    this.productlist=data;
   
  })
}

}
