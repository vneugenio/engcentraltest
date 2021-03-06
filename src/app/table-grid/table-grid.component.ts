import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit {
  gridTable = [];

  constructor() { }

  ngOnInit() {
    this.generateGrid();
  }

  coordinates: object;

  getCoords($event): void {
    this.coordinates = $event;
    const  x = this.coordinates['x'];
    const  y  = this.coordinates['y'];
    const  state = this.coordinates['state'];

    this.gridTable[x-1][y-1]['state'] = state;

    console.log(this.gridTable);
  }

  // toggle if 'on' or 'off'
  toggleState(value: object): void {
    switch(value['state']) {
      case 'off':
        value['state'] = 'on';
        break;
      case 'on':
        value['state'] = 'off';
        break;
    }
  }

  // generate grid for the table
  generateGrid(): void {
    const grid = [];
    for (let y = 4; y > 0; y--) {
      const col = [];
      for (let x = 0; x < 4; x++) {
        col.push({
          x: x + 1,
          y: y,
          state: 'off'
        });
      }
      grid.push(col);
    }
    this.gridTable = grid;
    console.log('test ' + this.coordinates['status']);
  }

}
