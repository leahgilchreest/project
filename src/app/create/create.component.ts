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
  myDate : Date;
  onAddMovie(form: NgForm) {
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);
    console.log(form.value.date);
    this.myDate = new Date(form.value.date);
    console.log(this.myDate);

    this.movieService.AddMovieInformation(form.value.title,
      form.value.year, form.value.poster).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }

}

