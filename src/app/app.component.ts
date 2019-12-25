import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-movie></nav-movie>
  <div class="container">
    <h2> {{pageTitle}} </h2>
    <router-outlet> </router-outlet> 
  </div>
`,
styles:
    [`
     h2 {color:white; margin-top:40px;}

`]
})
export class AppComponent {
  title = 'Movie-Album';
}
