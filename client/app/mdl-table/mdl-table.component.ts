import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MdlDefaultTableModel } from '@angular-mdl/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-mdl-table',
  templateUrl: './mdl-table.component.html'
})
export class MdlTableComponent implements OnInit  {
  ngOnInit(){
    this.tableModel.addAll(this.tableData);
    this.selected = this.tableData.filter( data => data.selected);
  }

  tableData:[any] = [
    {material:'Acrylic (Transparent)', quantity:25, unitPrice:2.90, selected:true},
    {material:'Plywood (Birch)', quantity:50, unitPrice:1.25, selected:false},
    {material:'Laminate (Gold on Blue)', quantity:10, unitPrice:2.35, selected:false}
  ];

  selected:Array<any> = [];

  public tableModel = new MdlDefaultTableModel([
    {key:'material', name:'Material', sortable:true},
    {key:'quantity', name:'Quantity', sortable:true, numeric:true},
    {key:'unitPrice', name:'Unit price', numeric:true}
  ]);

  selectionChanged($event){
    this.selected = $event.value;
  }
}
