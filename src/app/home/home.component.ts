import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared';
import { Item } from '../shared';
import {CaffeineService} from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  sources;

  constructor(private itemsService: ItemsService, private caffeineService: CaffeineService) { }

  ngOnInit() {
    this.getItems();
    this.sources = this.caffeineService.sources;
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }
}
