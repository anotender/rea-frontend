import {Component, Input, OnInit} from '@angular/core';
import {CommonStatistics} from "../../model/statistics.model";

@Component({
  selector: 'app-common-statistics',
  templateUrl: './common-statistics.component.html',
  styleUrls: ['./common-statistics.component.css']
})
export class CommonStatisticsComponent implements OnInit {

  @Input()
  public commonStatistics: CommonStatistics;

  constructor() {
  }

  ngOnInit() {
  }

}
