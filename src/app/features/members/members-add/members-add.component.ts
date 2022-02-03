import { MembersService } from './../../../services/members.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { MemberRequestDto } from '../../../models/member-add';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../../../helpers/date-adapter';
import * as moment from 'moment';

@Component({
  selector: 'ngx-members-add',
  templateUrl: './members-add.component.html',
  styleUrls: ['./members-add.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MembersAddComponent extends ToastComponent implements OnInit {

  memberFG: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: NbToastrService,
    private membersService: MembersService) {
    super(toastService);
  }

  ngOnInit(): void {
    this.memberFG = this.buildForm(this.formBuilder);

    this.memberFG.valueChanges.subscribe(x => console.log(x));
  }

  save(data: MemberRequestDto): void {
    data.dateAndMonthOfBirth = moment(data.dateAndMonthOfBirth).format('MM-YYYY');
    data.isWorker = data.isWorker as boolean;

    console.log('formValue', data);
    this.membersService.addMember(data)
      .subscribe(res => {
        this.showToast('success', 'Add Member', 'Member added successfully');
        this.memberFG.reset();
      },
        error => {
          console.log('error', error);
          this.showToast('danger', 'Add Member', 'Could not add a member at this moment, please try later');
        })
  }

  cancel(): void {
    this.memberFG.reset();
  }

  isValid = (memberFG: FormGroup) => memberFG.invalid;

  private buildForm(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'dateAndMonthOfBirth': ['', [Validators.required]],
      'gender': ['', [Validators.required]],
      'phoneNumber': ['', [Validators.required, Validators.pattern(/^(\+?44)(?:\d\s?){9,10}$/)]],
      'isWorker': [true, [Validators.required]]
    })
  }


  get name() { return this.memberFG.get('name') };
  get surname() { return this.memberFG.get('surname') };
  get dateMonthOfBirth() { return this.memberFG.get('dateMonthOfBirth') };
  get gender() { return this.memberFG.get('gender') };
  get phoneNumber() { return this.memberFG.get('phoneNumber') };
  get isWorker() { return this.memberFG.get('isWorker') };
}
