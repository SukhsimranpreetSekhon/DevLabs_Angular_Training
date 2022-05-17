import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  topics: Details[] = [{title: "Templates", content: "The template is the html of your component. In addition to traditional tags, Angular provides several new tags that add logic to the web-page's layout and data.", url: "../../../assets/images/templates.PNG"},
                      {title: "Styles", content: "Every component includes a css file. Styles applied here will apply to this component. Furthermore, the app.component.css file can be used for global stylings.", url: "../../../assets/images/styles.PNG"},
                      {title: "Selector", content: "The selector is like the name of the component. You can include the name of the component in an HTML tag, to reuse it on any template.", url: "../../../assets/images/selector.PNG"}];
  constructor() { }

  ngOnInit(): void {
  }

}

class Details {
  title: string;
  content: string;
  url: string;

  constructor(title: string, content: string, url: string) { 
    this.title = title; 
    this.content = content;
    this.url = url;
  }  
}
