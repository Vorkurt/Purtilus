import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {SpinnerStateService} from 'src/app/shared/component';
import {
  ContractDataForPackage,
  DataSourceMaterialTable,
  IActionMaterialColumn,
  Package,
} from 'src/app/shared/utils/interfaces';
import {PackService} from './common/service/pack.service';

@Component({
  selector: 'elix-pickup-collection',
  templateUrl: './pickup-collection.component.html',
  styleUrls: ['./pickup-collection.component.scss'],
})
export class PickupCollectionComponent implements OnInit {
  public dataSourcePacks: Package[];

  public pageOfEntrys: ContractDataForPackage;

  constructor(
    private readonly _spinnerStateService: SpinnerStateService,
    private readonly _packService: PackService,
  ) {
  }

  public ngOnInit(): void {
    this._packService.dataPacks.subscribe((dataEntries) => {
      if (dataEntries.countEntries) {
        this.pageOfEntrys = dataEntries;

        this.dataSourcePacks = dataEntries.entries?.map(
          (pack: Package) => ({
            actions: this._actionForTable(),
            editable: false,
            model: this._initDataModel(pack),
          } as DataSourceMaterialTable<any>),
        );
      }
    });
    this._spinnerStateService.setStateBehaviorSpinner(false);
  }

  /**
   * onChangePagination is trigger for onPaginationChange from table component
   */
  public onChangePagination(event: PageEvent) {
    this._packService.getAllPacks(event);
  }

  private _initDataModel(pack: Package): any {
    return {
      consigneeStreet: pack.consignee.street,
      consigneeCity: pack.consignee.city,
      consigneeNumberHouse: pack.consignee.numberHouse,
      consigneePostalCode: pack.consignee.postalCode,
      consigneeApartment: pack.consignee.apartment,
      repayment: pack.repayment,
      packageStreet: pack.packageAddress.street,
      packageCity: pack.packageAddress.city,
      packagePostalCode: pack.packageAddress.postalCode,
      note: pack.note,
      id: pack.id,
    };
  }

  private _actionForTable(): IActionMaterialColumn[] {
    return [
      {
        iconClass: 'fa_solid:check',
        classCss: 'pickup-check',
        method: (row: DataSourceMaterialTable<Package>) => {
          this._packService.sendStatusPackage(row.model.id, 0)
        },
      },
      {
        iconClass: 'fa_solid:hand-holding-hand',
        classCss: 'pickup-hold',
        method: (row: DataSourceMaterialTable<Package>) => {
          this._packService.sendStatusPackage(row.model.id, 1)
        },
      },
      {
        iconClass: 'fa_solid:xmark',
        classCss: 'pickup-denied',
        method: (row: DataSourceMaterialTable<Package>) => {
          this._packService.sendStatusPackage(row.model.id, 2)
        },
      },
    ] ;
  }
}
