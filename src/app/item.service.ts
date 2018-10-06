import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { ItemModel } from 'src/app/item-model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  selectedClient: ItemModel;
  item: ItemModel[];
  httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}
  constructor(private http: HttpClient) { }

  postItem(item:ItemModel) {

    var body = JSON.stringify(item);
    console.log(body);
    
    return this.http.post('http://localhost:60183/api/ItemMasters', body, this.httpOptions);

  }
  getItem():Observable<any>
  {
    return this.http.get('http://localhost:60183/api/ItemMasters').pipe(map(data=>data));
    
  }
  getCategory():Observable<any>
  {
    return this.http.get('http://localhost:60183/api/CategoryMasters').pipe(map(data=>data));
  }
}
