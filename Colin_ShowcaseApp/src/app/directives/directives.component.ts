import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  items: number[] = [1,2];
  showTag: boolean = true;
  fruit: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.items.push(this.items.length+1);
  }

  toggleShowTag(){
    if(this.showTag==true){
      this.showTag=false;
    } else {
      this.showTag=true;
    }
  }

}
