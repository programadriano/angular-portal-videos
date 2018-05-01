import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations/fadein';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./home.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies: any;

  ngOnInit() {
    this.moviesService.getJSON().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }

}
