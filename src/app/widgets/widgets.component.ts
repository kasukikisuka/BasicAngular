import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  link = '/items';
  color = 'blue';

  constructor() { }

  ngOnInit() {

  }
  echo(link) {
    console.log('message', this.color);
    console.log('message', link);
  }

}
