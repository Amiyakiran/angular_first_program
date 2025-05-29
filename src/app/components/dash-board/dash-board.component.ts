import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit {
  
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.gdata()
  }
  


  gdata(){
   this.api.getData().subscribe({
    next:(result:any)=>{
      console.log(result);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
   })
  }
}
