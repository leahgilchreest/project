import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../Movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }

  GetMovieInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/movies');
  }

  SendMovieInformation(Title:string,Year:string,Poster:string):Observable<any>{
    const movie:Movie = {Title:Title, Year:Year, Poster:Poster};
    return this.http.post('http://localhost:4000/api/movies', movie)
    }

    DeleteMovie(id:String):Observable<any>{
      return this.http.delete('http://localhost:4000/api/movies/'+id);
  
  }
  
  GetMovie(id:String):Observable<any> {
    return this.http.get('http://localhost:4000/api/movies/'+id);
  }
  
  UpdateMovie(id:String,Title:String,Year:String,Poster:String):Observable<any> {


    console.log(Year + "="+ Poster);
    const movie:Movie = {Title:Title, Year:Year, Poster:Poster};


    
    return this.http.put('http://localhost:4000/api/movies/'+id,movie);
  }
}