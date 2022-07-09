import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { ContractDataForPackage } from 'src/app/shared/utils/interfaces';
import { environment } from 'src/environments/environment';
import {TooglePackage} from "../enum";

@Injectable({
  providedIn: 'root',
})
export class PackService {
  public dataPacks: Subject<ContractDataForPackage> = new Subject();

  constructor(private readonly _httpClient: HttpClient) {}

  public getAllPacks(
    paginationDetail: PageEvent = { pageIndex: 0, pageSize: 5 } as PageEvent,
  ): void {
    this._httpClient
      .get<ContractDataForPackage>(
        `${environment.apiUrl}api/transport/pack?pageSize=${paginationDetail.pageSize}&pageNo=${paginationDetail.pageIndex}`,
      )
      .subscribe((contract: ContractDataForPackage) => {
        this.dataPacks.next(contract);
      });
  }

  public sendStatusPackage(packId: number, statusCode: TooglePackage)
   {
    return this._httpClient
      .post<ContractDataForPackage>(
        `${environment.apiUrl}api/transport/pack/${packId}`, statusCode
      )
      .subscribe(contract => contract);
  }

}
