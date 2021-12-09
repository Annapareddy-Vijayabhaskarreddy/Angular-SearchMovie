import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchmovieService {

  constructor(private http:HttpClient) { }
  getmovie(name:any){
   return this.http.get(`http://www.omdbapi.com/?apikey=8266bbff&t=${name}`)
  }
  getmovies(){
    return this.http.get('http://localhost:3000/movies');
  }
  getAdd(items:any){
    return this.http.post(' http://localhost:3000/movies',items);
  }
  DeleteMovietrash(id: number) {
    return this.http.delete(`http://localhost:3000/movies/${id}`);
  }
}
