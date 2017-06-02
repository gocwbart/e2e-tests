import { Component, OnInit } from '@angular/core';
import { MdlDefaultTableModel } from '@angular-mdl/core';
import { BackendDataService } from '../core/backendData.service'

@Component({
  selector: 'app-mdl-table',
  templateUrl: './mdl-table.component.html'
})
export class MdlTableComponent implements OnInit  {
  selected:Array<any> = [];
  tableModel = new MdlDefaultTableModel([
    {key:'name', name:'Name', sortable:true},
    {key:'students', name:'Students', sortable:true, numeric:true},
    {key:'classes', name:'Classes', sortable:true, numeric:true},
    {key:'teachers', name:'Teachers', sortable:true, numeric:true},
    {key:'contentBundles', name:'Content Bundles', sortable:true, numeric:true},
  ]);

  constructor(private backendDataService: BackendDataService) {
  }

  ngOnInit(){
    this.backendDataService
      .fetch('/api/schools')
      .subscribe((schools) => {
        console.log(schools);
        this.tableModel.addAll(schools.data);
      });
  }

  selectionChanged($event){
    this.selected = $event.value;
  }
}
