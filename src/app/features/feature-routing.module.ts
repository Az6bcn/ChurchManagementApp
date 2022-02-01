import { MembersListComponent } from './members/members-list/members-list.component';
import { MembersAddComponent } from './members/members-add/members-add.component';
import { MembersComponent } from './members/members.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,

    children: [
      {
        path: 'members',
        component: MembersComponent,
        children: [
          { path: 'add', component: MembersAddComponent },
          { path: 'congregation', component: MembersListComponent },
          { path: 'workers', component: MembersListComponent }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
