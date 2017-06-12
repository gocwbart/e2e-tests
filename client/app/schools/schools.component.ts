import { Component } from '@angular/core';
import { MdlDefaultTableModel, IMdlTableModelItem } from '@angular-mdl/core';

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
  tableModel = new MdlDefaultTableModel([
    {key:'name', name:'Name', sortable:true},
    {key:'students', name:'Students', sortable:true, numeric:true},
    {key:'classes', name:'Classes', sortable:true, numeric:true}
  ]);

  tableData:[ITableItem] = [
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

  constructor() {
    this.tableModel.addAll(this.tableData);
  }
}
