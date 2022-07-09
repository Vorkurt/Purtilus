import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { ContractDataForPackage } from 'src/app/shared/utils/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PackService {
  public dataPacks: Subject<ContractDataForPackage> = new Subject();

  constructor(private readonly _httpClient: HttpClient) {}

  public getAllPacks(
    paginationDetail: PageEvent = { pageIndex: 1, pageSize: 5 } as PageEvent,
  ): void {
    this._httpClient
      .get<ContractDataForPackage>(
        `${environment.apiUrl}api/transport/pack?pageSize=${paginationDetail.pageSize}&pageNo=${paginationDetail.pageIndex}`,
      )
      .subscribe((contract: ContractDataForPackage) => {
        this.dataPacks.next(contract);
      });
  }
}
