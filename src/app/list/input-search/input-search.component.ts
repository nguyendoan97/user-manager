import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() keyword: EventEmitter<any> = new EventEmitter<any>()

  getKeyword(event) {
    let value = event.target.value;
    this.keyword.emit(value)
  }


}
