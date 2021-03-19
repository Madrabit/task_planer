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

  constructor(private taskService: TaskService) { }

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
    let task = new Task(0, this.name, this.category, this.selectedStatus, this.dateStart, this.dateEnd);
    this.taskService.updateDate(task)
   // this.saveTaskEmitter.emit(task);
  }

  cancel() {
    this.cancelEditEmitter.emit(false);
  }

  selectChange(e: any) {
    this.selectedStatus = e.target.value;
  }
}
