import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { TaskStorageService } from '../../../shared/services/task-storage.service';


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
  status: [string, string, string, string] = ['Запланировано', 'Выполняется', 'Выполнено', 'Просрочено'];

  selectedStatus: string = 'Запланировано';

  @Output() addTaskEmitter =  new EventEmitter<Task>()


  constructor(private taskStorageService: TaskStorageService) { }

  ngOnInit(): void {
  }

  addTask() {
    let task = new Task(0, this.name, this.category, this.selectedStatus, this.dateStart, this.dateEnd);
    this.taskStorageService.addTask(task)
    // this.addTaskEmitter.emit(task);
  }

  selectChange(e: any) {
   this.selectedStatus = e.target.value;
  }
}
