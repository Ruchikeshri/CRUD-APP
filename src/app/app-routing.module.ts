import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'addrecord',component:AddRecordComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'update',component:UpdateComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
