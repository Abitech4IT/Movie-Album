import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Imovie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = "api/movies";

  constructor(private http: HttpClient) { }

  getMovies():Observable<Imovie[]>{
    return this.http.get<Imovie[]>(this.movieUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMovie(id: number): Observable<Imovie>{
    const url = `${this.movieUrl}/${id}`;
    return this.http.get<Imovie>(url)
    .pipe(
      tap(data => console.log('getProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage ='';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured ${err.error.message}`;

    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message} `;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }

}
