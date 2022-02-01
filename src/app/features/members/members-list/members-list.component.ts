import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../../../models/member';
import { MembersService } from '../../../services/members.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit, AfterViewInit {

  members = new MatTableDataSource<Member>();
  columnsToDisplay = [
    'name',
    'surname',
    'gender',
    'dateAndMonthOfBirth',
    'isWorker',
    'phoneNumber',
    'action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private membersService: MembersService,
    private activatedRoute: ActivatedRoute,
    private toastService: NbToastrService) { }

  ngOnInit() {
    const path = this.activatedRoute.snapshot.url.map(x => x.path)[0];
    console.log(path);
    path === 'workers' ? this.getWorkers() : this.getMembers()

  }

  getMembers(): void {
    this.membersService.getMembers()
      .subscribe(x => {
        console.log(x);
        this.members.data = x.results;
      })
  }

  getWorkers(): void {
    this.membersService.getWorkerMembers()
      .subscribe(x => {
        console.log(x);
        this.members.data = x.results;
      })
  }

  ngAfterViewInit() {
    this.members.paginator = this.paginator;
    this.members.sort = this.sort;
  }

  delete(memberId: number) {
    this.membersService.deleteMember(memberId)
      .subscribe(x => {
        this.toastService.success('Member delete successfully', 'Member Delete')

        const index = this.members.data.findIndex(x => x.memberId == memberId);
        this.members.data.splice(index, 1);
        this.members.data = [...this.members.data];
      },
        error => {
          {
            console.log('error', error);
            this.toastService.danger('Could not delete the member at this moment, please try later', 'Member Delete');
          }
        })
  }
}
