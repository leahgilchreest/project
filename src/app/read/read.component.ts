import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../Services/dog-service.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyDogs: any = [];
  constructor(private dogService: DogServiceService) { }

  ngOnInit() {
    this.dogService.GetDogInformation().subscribe((data) => {
      this.MyDogs = data.dogs;
      console.log(this.MyDogs);
    })
  }

  onDelete(id:String){
    console.log("Deleting dog with id:" +id);
    this.dogService.DeleteDog(id).subscribe();
    }


}


