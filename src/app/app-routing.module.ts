import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseTableComponent } from './base-table/base-table.component';

const routes: Routes = [
  {  path:'', redirectTo:'/base-table',pathMatch:'full'},
  {  path:'base-table',component:BaseTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
