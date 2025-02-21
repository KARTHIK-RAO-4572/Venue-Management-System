import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  // Establish GET Connection
  getConnection(url:string,database:string,query:string=""){
    if(query.length==0){
      return this.httpClient.get(`${url}/${database}`);
    }
    else{
      return this.httpClient.get(`${url}/${database}?${query}`)
    }
  }
  // Establish POST Connection
  postConnection(url:string,database:string,data:any){
    console.log("Data Received for POST request is");
    console.log(data);
    return this.httpClient.post(`${url}/${database}`,data);
  }
  // Establish PUT Connection
  putConnection(url:string,database:string,id:string,data:any)
  {
    console.log("Data Received for PUT request is");
    console.log(data);
    return this.httpClient.put(`${url}/${database}/${id}`,data)
  }
  //Establish DELETE Connection
  deleteConnection(url:string,database:string,id:string)
  {
    console.log(`Data Received for DELETE request is URL:${url} DATABASE:${database} ID:${id}`);
    return this.httpClient.delete(`${url}/${database}/${id}`);
  }
}
