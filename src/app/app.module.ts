import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { MovieData } from './movies/movie-data';
import { NavMovieComponent } from './nav/nav-movie.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailsComponent } from './movies/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMovieComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MovieData),
    RouterModule.forRoot([
      {path: 'movies', component: MovieListComponent },
      {path: 'movies/:id', component: MovieDetailsComponent },
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: '**', redirectTo: 'movies', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
