import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {

  constructor( private http:HttpClient) { }

//   getUser(){
//    return this.http.get("http://localhost:8081/allUsers");
//  }


}


