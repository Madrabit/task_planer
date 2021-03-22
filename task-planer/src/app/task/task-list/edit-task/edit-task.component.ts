import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
  OnChanges,
  HostBinding, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { Task } from '../task.model';
import { HelperService } from '../../../shared/services/helper.service';
import { TaskService } from '../../../shared/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { TaskStorageService } from '../../../shared/services/task-storage.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges, AfterViewChecked  {
  @Input() id!: number;
  @Input() name!: string;
  @Input() category!: string;
  @Input() dateStart!: string;
  @Input() dateEnd!: string;
  @Input() status!: string;
  statuses: [string, string, string, string] = ['Запланировано', 'Выполняется', 'Выполнено', 'Просрочено'];
  selectedStatus!: string;

  currentTask!: Task

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute,
              public _location: Location, private taskStorage: TaskStorageService,
              private router: Router) {
    activatedRoute.params.subscribe((params)=> this.id  = params['id'])
    this.currentTask = this.taskStorage.tasks[this.id]
  }

  @Output() saveTaskEmitter = new EventEmitter<Task>()
  @Output() cancelEditEmitter = new EventEmitter<boolean>()

  ngOnInit(): void {
    this.selectedStatus = this.status;
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {

  }

  ngAfterViewChecked() {
    setTimeout(() => {
      if (this.selectedStatus === 'Выполнено') {
        this.cancelEditEmitter.emit(false);
      }
    });
  }


  saveTask() {
    this.taskService.updateDate(this.currentTask)
    this.router.navigate(['tasks']);
   // this.saveTaskEmitter.emit(task);
  }

  cancel() {
    this._location.back();
    this.cancelEditEmitter.emit(false);
  }

  selectChange(e: any) {
    this.selectedStatus = e.target.value;
  }
}
