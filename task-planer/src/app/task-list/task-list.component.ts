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
    {
      name: 'Name 1',
      category: 'Category 1',
      dateStart: '18:15 08-10-2021',
      dateEnd: '10:00 10-11-2021',
      status: 'Выполнено'
    },
    {
      name: 'Name 2',
      category: 'Category 2',
      dateStart: '11:00 07-02-2021',
      dateEnd: '09:00 20-03-2021',
      status: 'Запланировано'
    },
    {
      name: 'Name 3',
      category: 'Category 2',
      dateStart: '11:00 07-02-2021',
      dateEnd: '09:00 20-03-2021',
      status: 'Просрочено'
    },
    {
      name: 'Name 4',
      category: 'Category 3',
      dateStart: '11:00 07-02-2021',
      dateEnd: '09:00 20-03-2021',
      status: 'Выполнено'
    }
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

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(value => value.status === status).length;
  }
}
