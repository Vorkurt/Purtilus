import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ColumnTextComponent } from './columns/column-text/column-text.component';
import { MatTableModule } from '@angular/material/table';
import { ColumnAreaTextComponent } from './columns/column-area-text/column-area-text.component';
import { ColumnIconActionComponent } from './columns/column-icon-action/column-icon-action.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnNumberComponent } from './columns/column-number/column-number.component';
import { ColumnSelectComponent } from './columns/column-select/column-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    TableComponent,
    ColumnTextComponent,
    ColumnAreaTextComponent,
    ColumnIconActionComponent,
    TooltipComponent,
    ColumnNumberComponent,
    ColumnSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    LayoutModule,
    SharedModule,
  ],
  exports: [
    TableComponent,
    ColumnTextComponent,
    ColumnAreaTextComponent,
    ColumnIconActionComponent,
    TooltipComponent,
    ColumnNumberComponent,
    ColumnSelectComponent,
  ],
})
export class TableMaterialModule {}
