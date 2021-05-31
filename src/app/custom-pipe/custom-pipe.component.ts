import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  public searchText : string;
  public customerData : any;
  constructor() { }

  ngOnInit(): void {
    this.customerData = [
      {"name": 'Sanjay Gowda', "Age": 21, "Place" :'Mandya'},
      {"name": 'Sunil', "Age": 24, "Place" :'Mysore'},
      {"name": 'Sushil', "Age": 28, "Place" :'Mysore'},
      {"name": 'Praveen', "Age": 25, "Place" :'Mandya'},
      {"name": 'Sachin', "Age": 21, "Place" :'Bangalore'},
      {"name": 'Manu', "Age": 25, "Place" :'Bangalore'},
      {"name": 'Dilip Kumar', "Age": 25, "Place" :'Tumkur'}];
  }

}
