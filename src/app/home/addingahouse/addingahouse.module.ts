import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddingahousePageRoutingModule } from './addingahouse-routing.module';

import { AddingahousePage } from './addingahouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddingahousePageRoutingModule
  ],
  declarations: [AddingahousePage]
})
export class AddingahousePageModule {}
