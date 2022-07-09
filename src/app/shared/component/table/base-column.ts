import { Component, Input, ViewChild } from '@angular/core';
import { MatColumnDef } from '@angular/material/table';

@Component({
  selector: 'app-base',
  template: '',
})
export abstract class BaseColumn {
  @ViewChild(MatColumnDef)
  public columnDef: MatColumnDef;

  @Input()
  public name: string;

  @Input()
  public field: string;

  @Input()
  public className: string;

  @Input()
  public iconClass: string;

  @Input()
  public editRow: boolean = false;

  @Input()
  public footerMessage: string | number | null;
}
