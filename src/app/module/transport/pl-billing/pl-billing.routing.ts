import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlBillingComponent } from './pl-billing.component';

const routes: Routes = [
  {
    path: '',
    component: PlBillingComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPlBillingRouting {}
