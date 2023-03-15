import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetServiceComponent } from './get-service/get-service.component';
import { HistoricDataComponent } from './historic-data/historic-data.component';
import { HistoricPaginationComponent } from './historic-pagination/historic-pagination.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full'}, 
  { path: 'first', component: GetServiceComponent}  ,
{  path: 'data', component: HistoricDataComponent},
{ path: 'datasecond', component: HistoricPaginationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
