import { DashboardSharedService } from './../../../services/dashboard-shared.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { ProgressInfo, StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnDestroy {

  private alive = true;

  @Input() progressInfoData: ProgressInfo[];
  currencyCode: string;

  constructor(
    private statsProgressBarService: StatsProgressBarData,
    private sharedDashboardDataService: DashboardSharedService) {

    // this.statsProgressBarService.getProgressInfoData()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((data) => {
    //     this.progressInfoData = data;
    //   });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedDashboardDataService.getTenantCurrencyCode()
      .subscribe(code => {
        this.currencyCode = code;
      });

    console.log('zzzzzzz', this.progressInfoData);
  }
  ngOnDestroy() {
    this.alive = true;
  }
}
