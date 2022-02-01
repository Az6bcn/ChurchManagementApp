import { MembersAddComponent } from './../features/members/members-add/members-add.component';
import { MembersComponent } from './../features/members/members.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
      // {
      //   path: '**', redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
