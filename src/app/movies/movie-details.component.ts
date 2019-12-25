import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './movie.service';
import { Imovie } from './movies';

@Component({
  templateUrl: './movie-details.component.html',
  styles:['.movie-image{height:100px;}']
    
})
export class MovieDetailsComponent implements OnInit {
  pageTitle: string = 'Movie Detail';
  movie: Imovie;
  errorMessage: string;
  
  constructor(private movieService:MovieService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getmovie(id);

  }

  getmovie(id: number) {
    this.movieService.getMovie(id).subscribe(
      movie => this.movie = movie,
      err => this.errorMessage = err
    );
  }
  
}
