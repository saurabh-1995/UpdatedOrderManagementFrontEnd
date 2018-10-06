import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { ClientModel } from 'src/app/client-model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  selectedClient: ClientModel;
  client: ClientModel[];
  httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}
  constructor(private http: HttpClient) { }

  postClient(client:ClientModel) {

    var body = JSON.stringify(client);
    console.log(body);
    
    return this.http.post('http://localhost:60183/api/ClientMasters', body, this.httpOptions);

  }
  getClient():Observable<any>
  {
    return this.http.get('http://localhost:60183/api/ClientMasters').pipe(map(data=>data));
    
  }

}
