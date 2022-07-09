import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BaseColumn } from '../base-column';
import { DataSourceMaterialTable } from '../../../utils/interfaces/shared/data-source-material-table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'elix-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> implements AfterViewInit, OnDestroy {
  @Input()
  public dataSource: Array<T>;

  @Input()
  public extensible: boolean = false;

  @Input()
  public extandble$: BehaviorSubject<DataSourceMaterialTable<T> | null>;

  // Footer
  @Input()
  public footerShow: boolean = false;

  // class for footer
  @Input()
  public footerMessageClass: string = '';

  // new table in row
  @Input()
  public newElementExtandble: TemplateRef<any>;

  // flag about if we want to show pagination
  @Input()
  public showPagination: boolean = false;

  // numberOf Entry
  @Input()
  public lenghtPagination: number;

  @Input()
  public paginationClass: string;

  @Output() public onAddEntry: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onPaginationChange: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();

  public columnsToDispaly: string[] = [];

  // this is where the magic happens:
  @ViewChild(MatTable, { static: true }) table: MatTable<T>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ContentChildren(BaseColumn)
  public columnDefs: QueryList<BaseColumn>;

  private doubleColumnToDisplay: string[] = [];

  // for avoid memory leak
  private _destroyed = new Subject<void>();

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _brPoint: BreakpointObserver
  ) {}

  // after the <ng-content> has been initialized, the column definitions are available.
  public ngAfterViewInit(): void {
    this.columnsToDispaly = this.columnDefs.map(
      (resp: BaseColumn) => resp.columnDef.name
    );
    this.columnDefs
      .map((resp: BaseColumn) => resp.columnDef)
      .forEach((rep: MatColumnDef) => this.table.addColumnDef(rep));

    try {
      const duplicate = this.columnsToDispaly.filter(
        (columnDisplay: string, index: number, self: string[]) =>
          index === self.findIndex((value: string) => value === columnDisplay)
      );
      this.doubleColumnToDisplay = this.columnsToDispaly;
      this._setColumnForLayout();
      if (duplicate.length < this.columnsToDispaly.length) {
        throw new Error(
          'You duplicate value what you want to display, Please look in definitions at columns'
        );
      }
    } catch (err) {
      console.error(err);
    }
    this._changeDetectorRef.detectChanges();
  }

  public addNewEntry() {}

  public changePage(event: PageEvent) {
    this.onPaginationChange.emit(event);
  }

  private _setColumnForLayout() {
    this._brPoint
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => {
        if (this._brPoint.isMatched(Breakpoints.XSmall)) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 0 || index === this.doubleColumnToDisplay.length - 1
              );
            }
          );
        } else if (this._brPoint.isMatched(Breakpoints.Small)) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 2 || index === this.doubleColumnToDisplay.length - 1
              );
            }
          );
        } else if (this._brPoint.isMatched(Breakpoints.Medium)) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 3 || index === this.doubleColumnToDisplay.length - 1
              );
            }
          );
        } else if (this._brPoint.isMatched(Breakpoints.Large)) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 4 || index === this.doubleColumnToDisplay.length - 1
              );
            }
          );
        } else if (this._brPoint.isMatched(Breakpoints.XLarge)) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index >=0
              );
            }
          );
        }
      });
  }

  public ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
