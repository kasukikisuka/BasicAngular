import { Component, OnInit , } from '@angular/core';
import {WidgetsService} from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedwidgets;
  widgets;
  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
  this.widgets = this.widgetsService.widgets;
  }

  selectwidget(widget) {
    this.selectedwidgets = widget;
  }

}
