import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../../task/task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor() {
  }

  private dataSource = new Subject<Task>();

  dataUpdate$ = this.dataSource.asObservable();

  updateDate(data: Task) {
    this.dataSource.next(data);
  }

}
