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

  constructor(private movies: MoviesService) { }

  ngOnInit() {
      this.movies.getJSON().subscribe(data => {
        console.log(data);
    });
  }

}
