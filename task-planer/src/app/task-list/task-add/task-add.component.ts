import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  id!: number;
  name!: string;
  category!: string;
  dateStart!: string;
  dateEnd!: string;
  status!: string;

  @Output() addTaskEmitter =  new EventEmitter<Task>()

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    let task = new Task(0, this.name, this.category, this.status, this.dateStart, this.dateEnd);
    this.addTaskEmitter.emit(task);
  }
}
