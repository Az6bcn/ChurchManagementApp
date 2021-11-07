import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-members-add',
  templateUrl: './members-add.component.html',
  styleUrls: ['./members-add.component.scss']
})
export class MembersAddComponent implements OnInit {

  memberFG: FormGroup;
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.memberFG = this.buildForm(this.formBuilder);

    this.memberFG.valueChanges.subscribe(x => console.log(x));
  }

  private buildForm(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'dateAndMonthOfBirth': ['', [Validators.required]],
      'gender': ['', [Validators.required]],
      'phoneNumber': ['', [Validators.required]],
      'isWorker': ['', [Validators.required]],
      'tenantId': ['', [Validators.required]],
    })
  }


  get name() { return this.memberFG.get('name') };
  get surname() { return this.memberFG.get('surname') };
  get dateMonthOfBirth() { return this.memberFG.get('dateMonthOfBirth') };
  get gender() { return this.memberFG.get('gender') };
  get phoneNumber() { return this.memberFG.get('phoneNumber') };
  get isWorker() { return this.memberFG.get('isWorker') };
}
