import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchmovieService } from 'src/app/services/searchmovie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:SearchmovieService,private route:ActivatedRoute,  private r:Router) { }
public searchmovie:string="";
public response:any;
public rating:any;
public movietrue=false;
public movie:any;
public  starRating:any;
  ngOnInit(): void {
   
  }
submitForm(form:NgForm){

if(form.valid){
  this.movietrue=true
  this.service.getmovie(this.searchmovie).subscribe(data=>{
     this.movie=data;
     if(this.movie.Response=="True"){
     this.response=true
     
    }
     else{
       this.response=false
       this.r.navigate(['/notfound'
    ]);
     }
     console.log(this.response)
  });
}
else{
  this.movietrue=false
  alert('please enter movie name')
}
}
save(){
  let item={
    Title:this.movie.Title,
    Director:this.movie.Director,
    Actors:this.movie.Actors,
    Genre:this.movie.Gener,
    Year:this.movie.Year,
    Released:this.movie.Released,
    Runtime:this.movie. Runtime,
    Language:this.movie.Language,
    Awards:this.movie.Awards,
    Country:this.movie.Country,
    Plot:this.movie.Plot,
    Poster:this.movie.Poster,
    Rating:this.rating,
  }
  this.starRating = item.Rating
  console.log(this.starRating)

  this.service.getAdd(item).subscribe(data=>{  
    this.rating="",
    this.movietrue=false,
    this.searchmovie=""
  })
}
}
