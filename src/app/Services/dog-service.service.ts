import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dog} from '../dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  constructor(private http:HttpClient) { }

  GetDogInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/Dogs');
  }

  AddDogInformation(Name:String,Breed:String,Colour:String):Observable<any>{
    const dog:Dog = {Name:Name, Breed:Breed, Colour:Colour};
    return this.http.post('http://localhost:4000/api/Dogs', dog)
    }

    DeleteDog(id:String):Observable<any>{
      return this.http.delete('http://localhost:4000/api/Dogs/'+id);
  
  }
  
  GetDog(id:String):Observable<any> {
    return this.http.get('http://localhost:4000/api/Dogs/'+id);
  }
  
  UpdateDog(id:String,Name:String,Breed:String,Colour:String):Observable<any> {


    console.log(Name + "="+ Colour);
    const dog:Dog = {Name:Name, Breed:Breed, Colour:Colour};


    
    return this.http.put('http://localhost:4000/api/Dogs/'+id,dog);
  }
}