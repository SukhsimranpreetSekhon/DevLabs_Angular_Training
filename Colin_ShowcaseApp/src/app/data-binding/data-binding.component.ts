import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  textColor: string="orange"
  resultText: string="Type Something"
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleTextColor(){
    if(this.textColor==="orange"){
      this.textColor="blue";
    } else {
      this.textColor="orange";
      console.log('test')
    }
  }
}
