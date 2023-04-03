import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { HistoricDataComponent } from './historic-data/historic-data.component';
import { HistoricPaginationComponent } from './historic-pagination/historic-pagination.component';
import { AuthGuard } from './sec/auth.guard';
import { TimeserieComponent } from './timeserie/timeserie.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full'}, 
  { path: 'first', component: GetServiceComponent , data: { roles: ['USER'] }, canActivate: [AuthGuard] }  , 
{ path: 'datasecond', component: HistoricPaginationComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard] },
{ path: 'error', component: ErrorcomponentComponent} ,
{ path: 'timeserie', component: TimeserieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
