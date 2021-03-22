import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { findIndex } from 'rxjs/operators';
import { Task } from './task.model';
import { TaskService } from '../../shared/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStorageService } from '../../shared/services/task-storage.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges, AfterViewInit {

  public tasks!: Task[]

  editable: boolean = false
  indexForEdit!: number

  checkedFilter: boolean = false
  editingTask!: Task;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute,
  private taskStorage: TaskStorageService
  ) {

  }

  ngOnInit(): void {
    this.tasks = this.taskStorage.tasks
    this.taskService.dataUpdate$.subscribe((data: Task) => {
      this.saveTaskToArray(data)
    });
  }


  ngOnChanges(): void {



  }

  ngAfterViewInit(): void {
    this.taskStorage.observableTasks$.subscribe(e => this.tasks = e);
  }

  addTask() {
    console.log('Задача создана');
  }

  getFilteredTasks() {
    this.tasks = this.tasks.filter(value => value.status === 'Выполнено');
  }

  filterTasks($event: any) {
    this.checkedFilter = $event.currentTarget.checked;
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
    task._id = this.tasks.length;
    this.tasks.push(task);
    console.log(`Добавлена задача ${task._id}`)
  }

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(value => value.status === status).length;
  }

  editTask(id: number) {
    this.editable = !this.editable
    this.indexForEdit = id
    this.editingTask = {...this.tasks[this.indexForEdit]}
  }

  saveTaskToArray(task: Task) {
    task._id = this.indexForEdit;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i]._id === this.indexForEdit) {
        this.tasks[i] = task;
      }
    }
  }

  cancelEdit($event: boolean) {
    this.editable = false;
  }



}
