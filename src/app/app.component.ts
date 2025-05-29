import { DatePipe, NgClass, NgFor, NgIf, UpperCasePipe} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppendPipe } from './pipes/append.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgIf , NgFor , NgClass , FormsModule, UpperCasePipe, DatePipe , AppendPipe   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
   //properties 
  title:string = 'demo';

  subject:string = "Angular"
  img:string = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
  headStyle:string="center"

  username:string=""
//predefined method - constructor

 word:boolean =false 

 time:number = Date.now() 
 day:any = new Date()
  
 nameArray : string[] = ['MAX', 'NEEL', 'KAVI', 'JENNI']

 age:Number=0
 
 //method 
 btnclick(){
   alert('Button clicked')
   console.log('clicked');
   
 }

 add(x:string){
  console.log(x);
  
 }

 getname(events:any){
   console.log(events.target.value);
   this.username = events.target.value
 }
 getUser(user:any){
  console.log(user.value);
  
 }




}
