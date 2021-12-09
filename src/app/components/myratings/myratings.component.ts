import { Component, OnInit } from '@angular/core';
import { SearchmovieService } from 'src/app/services/searchmovie.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-myratings',
  templateUrl: './myratings.component.html',
  styleUrls: ['./myratings.component.css']
})
export class MyratingsComponent implements OnInit {

  constructor(private service:SearchmovieService) { }
  public getNote:any;
  public  starRatingg:any;
  ngOnInit(): void {
    this.getMoviesList();
  }
  getMoviesList(){
    this.service.getmovies().subscribe(data=>{
      this.getNote=data;
      this.starRatingg=8
      
    });
}
DeleteMovieList(item:any){
  this.service.DeleteMovietrash(item.id).subscribe(data=>{
    this.getMoviesList();
    
  });
}

}