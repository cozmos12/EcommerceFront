import { Product } from './../common/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='http://localhost:8080/product/'

  constructor(private httpClient:HttpClient) { }

  getProdutList(theCategoryId:number):Observable<Product[]>{

    const searcUrl='${this.baseUrl}/findAllByCategoryId/theCategoryId'

     return this.httpClient.get<Product[]>(searcUrl);

  }
}

interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
