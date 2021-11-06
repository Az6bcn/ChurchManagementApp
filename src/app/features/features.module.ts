import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { MembersAddComponent } from './members/members-add/members-add.component';
import { FeaturesRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [
    MembersComponent,
    MembersAddComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
