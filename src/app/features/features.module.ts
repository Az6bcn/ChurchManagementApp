import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { MembersAddComponent } from './members/members-add/members-add.component';
import { FeaturesRoutingModule } from './feature-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbMenuModule, NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbProgressBarModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../@theme/theme.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
];

@NgModule({
  declarations: [
    MembersComponent,
    MembersAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    NbMenuModule,
    ThemeModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    ...materialModules
  ]
})
export class FeaturesModule { }
