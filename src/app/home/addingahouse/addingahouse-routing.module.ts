import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddingahousePage } from './addingahouse.page';

const routes: Routes = [
  {
    path: '',
    component: AddingahousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddingahousePageRoutingModule {}
