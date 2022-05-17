import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  str1: string = "banana"
  str2: string = "milkshake"

  constructor() { }

  ngOnInit(): void {
  }

  countFirstStringLength() {
    return this.str1.length;
  }
}
