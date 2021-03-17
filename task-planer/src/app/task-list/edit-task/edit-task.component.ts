import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
  OnChanges,
  DoCheck,
  HostBinding
} from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() id!: number;
  @Input() name!: string;
  @Input() category!: string;
  @Input() dateStart!: string;
  @Input() dateEnd!: string;
  @Input() status!: string;
  statuses: [string, string, string, string] = ['Запланировано', 'Выполняется', 'Выполнено', 'Просрочено'];
  selectedStatus: string = status;
  constructor() { }

  @Output() saveTaskEmitter = new EventEmitter<Task>()
  @Output() cancelEditEmitter = new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {

  }

  ngDoCheck() {
    console.log('changed')
    console.log(this.selectedStatus)
    if (this.selectedStatus === 'Выполнено') {
      console.log('Отмена выполнения')
      this.cancelEditEmitter.emit(false);
    }
  }

  saveTask() {
    let task = new Task(0, this.name, this.category, this.selectedStatus, this.dateStart, this.dateEnd);
    this.saveTaskEmitter.emit(task);
  }

  cancel() {
    this.cancelEditEmitter.emit(false);
  }

  selectChange(e: any) {
    this.selectedStatus = e.target.value;
  }
}
