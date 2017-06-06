import { Component } from '@angular/core';

import 'rxjs/add/operator/map';

import { BackendDataService } from '../core/backendData.service'

@Component({
  selector: 'app-right-angled-example',
  templateUrl: './right-angled-example.component.html'
})
export class RightAngledExampleComponent  {
  sort: string;
  showContentBundles: boolean = false;

  constructor(private backendDataService: BackendDataService) {
  }

  getData = (params) => {
    this.sort = params.sortings[0];

    return this.backendDataService
      .fetch(`/api/schools?page=${params.skip / params.take + 1}&limit=${params.take}`)
      .map((response) => {
        return {
          items: response.data,
          loadedCount: response.data.length,
          totalCount: response.count
        };
      })
  };
}
