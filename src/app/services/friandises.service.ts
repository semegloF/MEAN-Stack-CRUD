import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Friandise} from '../models/friandise.model';


@Injectable({
  providedIn: 'root'

})

export class FriandisesService {
 baseUrl='http://10.30.40.121:3138/frian';
  //baseUrl='http://localhost:3144/frian';

  constructor(private http:HttpClient) { }
  getAll():Observable<Friandise[]>{
    return this.http.get<Friandise[]>(`${this.baseUrl}/friandises`)
  }
  create(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/newFriandise`,data)
  }
  findById(_id:any):Observable<any>{
    return this.http.get<Friandise[]>(`${this.baseUrl}/lireUneFriandise/${_id}`);
  }
  update(_id: any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/upFriandise/${_id}`,data);
  }
  delete(_id: any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delFriandise/${_id}`);
  }
}
