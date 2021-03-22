import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from '../../task/task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  private _tasks: Task[] = [
    new Task(0,'Name 1', 'Category 1', 'Выполнено',
      '08-10-2021', '10-11-2021'),
    new Task(1, 'Name 2', 'Category 2', 'Запланировано',
      '07-02-2021', '20-03-2021'),
    new Task(2, 'Name 3', 'Category 2', 'Просрочено',
      '03-02-2021', '01-03-2021'),
    new Task(3,'Name 4', 'Category 3', 'Выполнено',
      '05-02-2021', '21-03-2021')
  ]

  // private _observableTasks!: BehaviorSubject<Task[]>;


  get tasks(): Task[] {
    return this._tasks;
  }

  private _observableTasks = new Subject<Task[]>();

  observableTasks$ = this._observableTasks.asObservable();

  constructor() {

  }

  // getTasks(): Observable<Task[]> {
  //   return this._observableTasks.asObservable();
  //
  // }


  addTask(task: Task) {
    this._tasks.push(task);
    this._observableTasks.next(this._tasks);
  }

  updateDate(data: Task[]) {
    this._observableTasks.next(data);
  }
}
