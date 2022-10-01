import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemGroupComponent } from './item-group/item-group.component';


const routes: Routes = [
  {
  path: '',
  component: DefaultComponent,
  },
  {
    path: 'item-list',
    component: ItemListComponent,
  },
  {
    path: 'item-group',
    component: ItemGroupComponent
  }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
