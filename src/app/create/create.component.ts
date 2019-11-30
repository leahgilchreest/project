import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DogServiceService } from '../Services/dog-service.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  

  constructor(private DogService:DogServiceService) { }

  ngOnInit() {
  }

  onAddDog(form: NgForm) {
    console.log(form.value);
    this.DogService.SendDogInformation(form.value.Name,form.value.Breed, form.value.Colour).subscribe();
  
    form.resetForm();
    }
}

