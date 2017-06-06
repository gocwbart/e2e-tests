import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../core/backendData.service'
import { GenericTableComponent, GtConfig } from '@angular-generic-table/core';

@Component({
  selector: 'app-angular-generic-table-example',
  templateUrl: './angular-generic-table-example.component.html'
})
export class AngularGenericTableExampleComponent implements OnInit  {
  public configObject: GtConfig<any>;
  private myTable: GenericTableComponent<any, any>;

  constructor(private backendDataService: BackendDataService) {
    this.configObject = {
      settings:[
        {
          objectKey: 'name',
          sort: 'desc',
          columnOrder: 0
        },
        {
          objectKey: 'students',
          sort: 'enable',
          columnOrder: 1
        },
        {
          objectKey: 'teachers',
          sort: 'enable',
          columnOrder: 2
        },
        {
          objectKey: 'contentBundles',
          sort: 'enable',
          columnOrder: 3
        }
      ],
      fields:[
        {
          name: 'Name',
          objectKey: 'name'
        },
        {
          name: 'Students',
          objectKey: 'students'
        },
        {
          name: 'Teachers',
          objectKey: 'teachers'
        },
        {
          name: 'Content Bundles',
          objectKey: 'contentBundles'
        },
        ],
      data:[]
    };
  }

  ngOnInit(){
    this.backendDataService
      .fetch('/api/schools')
      .subscribe((schools) => {
        this.configObject.data = schools.data;
      });
  }
}
