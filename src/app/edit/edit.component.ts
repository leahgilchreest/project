import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router,ActivatedRoute} from '@angular/router';
import {DogServiceService} from '../Services/dog-service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
dog:any=[];
  constructor(private dogService:DogServiceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.dogService.GetDog(this.route.snapshot.params['id']).subscribe((data)=>{
      this.dog=data;
      console.log(this.dog);
          }
         )}



        onEditDog(form: NgForm) {
          console.log(form.value.Name);
          this.dogService.UpdateDog(this.dog._id,form.value.Name,form.value.Breed,form.value.Colour).subscribe();
          }
  }