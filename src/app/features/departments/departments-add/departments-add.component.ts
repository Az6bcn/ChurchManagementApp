import { DepartmentsService } from './../../../services/departments.service';
import { NbToastrService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DepartmentRequestDto } from '../../../models/department-add';

@Component({
  templateUrl: './departments-add.component.html',
  styleUrls: ['./departments-add.component.scss']
})
export class DepartmentsAddComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _toastService: NbToastrService,
    private _departmentService: DepartmentsService
  ) { }

  departmentFG: FormGroup;
  ngOnInit(): void {
    this.departmentFG = this.buildForm(this._formBuilder);
  }

  save(data: DepartmentRequestDto): void {
    console.log('depart', data);
    this._departmentService.addDepartment(data)
      .subscribe(res => {
        this._toastService.success('Department added successfully', 'Add Department');
        this.departmentFG.reset();
      },
        error => {
          this._toastService.danger(error, 'Add Department');
        })
  }

  cancel(): void {
    this.departmentFG.reset();
  }

  isValid = (departmentFG: FormGroup) => departmentFG.invalid;

  private buildForm(fb: FormBuilder): FormGroup {
    return fb.group({
      'name': ['', [Validators.required]]
    })
  }

  get name() { return this.departmentFG.get('name') };

}
