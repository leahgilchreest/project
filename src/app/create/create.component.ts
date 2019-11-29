import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MovieServiceService } from '../Services/movie-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
  }
  
  onAddMovie(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);

    this.movieService.SendMovieInformation(form.value.Title,
      form.value.Year, form.value.Poster).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );

    console.log(form.value);
    form.resetForm();
  }

}
