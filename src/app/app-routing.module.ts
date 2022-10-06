import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ItemGroupComponent } from './modules/item-group/item-group.component';
import { ItemListComponent } from './modules/item-list/item-list.component';
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
{
  path: 'item-list',
  component: ItemListComponent
},
{
  path: 'item-group',
  component: ItemGroupComponent
}]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
