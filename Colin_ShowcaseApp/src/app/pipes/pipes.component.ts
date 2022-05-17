import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  caseText: string = "UPPER or lower"
  date: Date = new Date(2022, 5, 9)
  money: number = 50;
  pi: number = 3.1459
  constructor() { }

  ngOnInit(): void {
  }

}
