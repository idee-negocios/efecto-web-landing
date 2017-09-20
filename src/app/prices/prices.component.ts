import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent implements OnInit {

  @Output() section = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  moveTo( section: string) {
    this.section.emit(section);
  }

}
