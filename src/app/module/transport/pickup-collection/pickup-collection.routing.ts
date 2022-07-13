import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CONFIG_MAIN} from 'src/@core/config/routing-main';
import {AllFrameSharedComponent} from 'src/app/shared/component/all-frame-shared/all-frame-shared.component';
import {GetPacksResolver} from './common/service';
import {PickupCollectionComponent} from './pickup-collection.component';
import {NewPackComponent} from "./entry/edit-pack/new-pack.component";

const routes: Routes = [
  {
    path: '',
    component: AllFrameSharedComponent,
    data: {config: CONFIG_MAIN.pack},
    children: [
      {
        path: '',
        component: PickupCollectionComponent,
        resolve: {
          packs: GetPacksResolver,
        },
      },
      {
        path: ':id',
        component: NewPackComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPickupCollectionRouting {
}
