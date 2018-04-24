import {Component, OnInit,} from '@angular/core';
import {Widget, WidgetsService} from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidgets: Widget;
  widgets: Array<Widget>;
  widgetList: Widget[];

  constructor(private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    if (!this.widgets) {
      this.widgets.push({id: 13, description: 'aaaa', name: 'aaaaa'});
    }
  }

  selectWidget(widget) {
    this.selectedWidgets = widget;
  }

}
