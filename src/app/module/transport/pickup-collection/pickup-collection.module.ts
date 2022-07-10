import { AppPickupCollectionRouting } from './pickup-collection.routing';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { PickupCollectionComponent } from './pickup-collection.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableMaterialModule } from 'src/app/shared/component';
import { EditPackComponent } from './entry/edit-pack/edit-pack.component';

@NgModule({
  declarations: [PickupCollectionComponent, EditPackComponent],
  imports: [
    AppPickupCollectionRouting,
    CommonModule,
    MatIconModule,
    SharedModule,
    TableMaterialModule,
  ],
})
export class PickupColectionModule {}
