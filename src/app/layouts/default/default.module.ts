import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ItemListComponent } from 'src/app/modules/item-list/item-list.component';
import { ItemGroupComponent } from 'src/app/modules/item-group/item-group.component';
import { DefaultComponent } from './default.component';

import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ItemListComponent,
    ItemGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatFormFieldModule
  ]
})
export class DefaultModule { }
