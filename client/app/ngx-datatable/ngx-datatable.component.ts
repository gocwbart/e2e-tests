import { Component } from '@angular/core';
import { BackendDataService } from '../core/backendData.service'

@Component({
  selector: 'app-ngx-datatable-table',
  templateUrl: './ngx-datatable.component.html'
})
export class NgxDatatableComponent {
  isLoading:boolean = false;
  offset:number = 0;
  limit:number = 10;
  count:number;
  rows:Array<any>;
  columns:Array<any>;
  allColumns:Array<any>;
  selected:Array<any>;
  sorts:Array<any>;

  constructor(private backendDataService: BackendDataService) {
    this.allColumns = [
      {width: 40, sortable: false, canAutoResize: false, draggable: false, resizeable: false, checkboxable: true},
      {width: 200, name: 'School Name', prop: 'name', draggable: false},
      {width: 150, name: 'Students', prop: 'students'},
      {width: 150, name: 'Classes', prop: 'classes', headerClass: 'css-class-blue'},
      {width: 150, name: 'Teachers', prop: 'teachers', cellClass: this.getCellClass},
      {width: 150, name: 'Content Bundles', prop: 'contentBundles'}
    ];

    this.columns = this.allColumns.slice(0, 5);

    this.selected = [];

    this.search(0);
  }

  search(offset) {
    this.isLoading = true;

    this.backendDataService
      .fetch('/api/schools')
      .subscribe((schools) => {
        this.isLoading = false;
        this.offset = offset;
        this.count = schools.count;
        this.rows = schools.data;
      });
  }

  changeLimit(newLimit:number) {
    this.limit = newLimit;
    this.search(0);
  }

  prevPage() {
    const offset = Math.max(0, this.offset - 1);

    this.search(offset);
  }

  nextPage() {
    const offset = Math.min(Math.floor(this.count / this.limit) - 1, this.offset + 1);

    this.search(offset);
  }

  onSort(event) {
    this.sorts = event.sorts;

    this.search(0);
  }

  toggleColumn(col) {
    const isColumnChecked = this.isColumnChecked(col);

    if (isColumnChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isColumnChecked(col) {
    return this.columns.find(c => c.name === col.name);
  }

  getRowClass(row) {
    return {
      'css-class-green': row.contentBundles === 2
    };
  }

  getCellClass({ row, column, value }): any {
    return {
      'css-class-red': value === 0
    };
  }
}
