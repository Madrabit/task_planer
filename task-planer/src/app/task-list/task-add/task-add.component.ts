import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  name: string | undefined;
  category: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
  status: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addTack() {

  }
}
