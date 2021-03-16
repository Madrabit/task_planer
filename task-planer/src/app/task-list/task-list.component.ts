import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    new Task('Name 1', 'Category 1', 'Выполнено',
      '18:15 08-10-2021', '10:00 10-11-2021'),
    new Task('Name 2', 'Category 2', 'Запланировано',
      '11:00 07-02-2021', '09:00 20-03-2021'),
    new Task('Name 3', 'Category 2', 'Просрочено',
      '11:00 07-02-2021', '09:00 20-03-2021'),
    new Task('Name 4', 'Category 3', 'Выполнено',
      '11:00 07-02-2021', '09:00 20-03-2021')
  ]

  checkedFilter: boolean = false

  constructor() {

  }

  ngOnInit(): void {

  }


  addTack() {
    console.log('Задача создана');
  }

  getFilteredTasks() {
    this.tasks = this.tasks.filter(value => value.status === 'Выполнено');
  }

  filterTasks($event: any) {
    this.checkedFilter = $event.currentTarget.checked;
    console.log($event.currentTarget.checked);
  }

  getTasksListSize() {
    return this.tasks.length
  }

  deleteTaskFromArray(name: string) {
    let itemIndex = this.tasks.findIndex(value => value.name === name);
    if (itemIndex > -1) {
      this.tasks.splice(itemIndex, 1)
    }
    console.log(`Задача ${name} удалена`);
  }

  addTaskToArray(task: Task) {
    this.tasks.push(task);
    console.log(`Добавлена задача ${task.name}`)
  }

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(value => value.status === status).length;
  }
}
