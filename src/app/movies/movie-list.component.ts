import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Imovie } from './movies';

@Component({
  templateUrl: './movie-list.component.html',
  styles: [`
    img{height:120px;}
     .card{min-height:70px; margin-top:30px;}
  `]
  
})
export class MovieListComponent implements OnInit {
  errorMessage: string;

//   _movieFilter:string;
//   get movieFilter():string {
//     return this._movieFilter
//   }
//   set movieFilter(value:string){
//     this._movieFilter = value;
//     this.filteredMovies = this.movieFilter ? this.performFilter(this.movieFilter) : this.movies;
//   }

    
    //filteredMovies: Imovie[];
    movies:Imovie[] = [];
    constructor(private movieService:MovieService){
      
    }

    ngOnInit():void{
        this.movieService.getMovies().subscribe(
          movies => this.movies = movies,
          error => this.errorMessage = <any>error
        );
        

    }
    // performFilter(filterBy: string):Imovie[] {
    //   filterBy = filterBy.toLocaleLowerCase();
    //   return this.movies.filter((movie:Imovie) =>
    //   movie.title.toLocaleLowerCase().indexOf(filterBy)!== -1);
    // }


  
}
