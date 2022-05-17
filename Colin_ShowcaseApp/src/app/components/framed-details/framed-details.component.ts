import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-framed-details',
  templateUrl: './framed-details.component.html',
  styleUrls: ['./framed-details.component.css']
})
export class FramedDetailsComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() image_url: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
