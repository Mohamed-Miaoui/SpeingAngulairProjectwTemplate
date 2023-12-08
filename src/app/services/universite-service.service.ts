import { Injectable } from '@angular/core';
import { Universite } from '../models/universite';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {

  universitesURL : string = "http://localhost:8085";
  constructor(private _http:HttpClient) {
    console.log("university service constructor ");
   }
   addUniversite(universite:Universite):Observable<Universite>{
    return this._http.post<Universite>('http://localhost:8085/addUniversite',universite,httpOptions);
    }
   
   getAllUniversite():Observable<Universite[]>{
    return this._http.get<Universite[]>('http://localhost:8085/getallU',httpOptions);
   }
   
   getUniversite(id:number):Observable<Universite>{
    return this._http.get<Universite>(this.universitesURL+"/Universties/"+id,httpOptions);
    }
   
   updateUniversite(universite:Universite):Observable<Universite>{
    return this._http.put<Universite>(this.universitesURL+"/updateU",universite,httpOptions);
    }
    deleteUniversite(idu:number):Observable<Universite>{
      return this._http.delete<Universite>(this.universitesURL+"/deleteUni/"+idu,httpOptions);
     } 
}
