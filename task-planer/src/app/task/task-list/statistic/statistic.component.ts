import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  @Input() tasksAll: any;
  @Input() tasksPlanned: any;
  @Input() tasksOverdue: any;
  @Input() tasksFinished: any;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

}
