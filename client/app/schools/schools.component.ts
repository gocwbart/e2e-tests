import { IMdlTableModelItem, MdlDefaultTableModel } from '@angular-mdl/core';
import { Component } from '@angular/core';

export interface ITableItem extends IMdlTableModelItem {
  name: string;
  students: number;
  classes: number;
}

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html'
})
export class SchoolsComponent {
  public tableModel: MdlDefaultTableModel;

  constructor() {
    const tableData: [ITableItem] = [
      {
        name: 'School A',
        students: 100,
        classes: 3,
        selected: false
      },
      {
        name: 'School B',
        students: 100,
        classes: 3,
        selected: false
      }
    ];

    this.tableModel = new MdlDefaultTableModel([
      {
        key: 'name',
        name: 'Name',
        sortable: true
      },
      {
        key: 'students',
        name: 'Students',
        sortable: true,
        numeric: true
      },
      {
        key: 'classes',
        name: 'Classes',
        sortable: true,
        numeric: true
      }
    ]);

    this.tableModel.addAll(tableData);
  }
}
