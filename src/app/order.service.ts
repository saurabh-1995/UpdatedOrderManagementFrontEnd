import { Injectable } from '@angular/core';
import { OrderModel } from './order-model';
import { HttpClient,HttpHeaders} from '@angular/common/http'

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  selectedOrder:OrderModel;
  order: OrderModel[];
  httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}
  

  constructor(private http:HttpClient) { }
  postOrderList(order):Observable<any> {
    console.log(order)
 
    return this.http.post('https://localhost:44335/api/OrderMasters', order);

  }
  
  getOrderList():Observable<any>
  {
    return this.http.get('https://localhost:44335/api/OrderMasters').pipe(map(data=>data));
    
  }

}
