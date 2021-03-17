import { Component, OnInit, EventEmitter, Output, Input, OnDestroy, OnChanges } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges {
  @Input() id!: number;
  @Input() name!: string;
  @Input() category!: string;
  @Input() dateStart!: string;
  @Input() dateEnd!: string;
  @Input() status!: string;

  constructor() { }

  @Output() saveTaskEmitter = new EventEmitter<Task>()
  @Output() cancelEditEmitter = new EventEmitter<boolean>()

  ngOnInit(): void {
    console.log('Init edit.ts')
  }

  ngOnDestroy(): void {
    console.log('Destroy edit.ts')
  }

  ngOnChanges(): void {
    console.log('Change edit.ts')
  }


  saveTask() {
    let task = new Task(0, this.name, this.category, this.status, this.dateStart, this.dateEnd);
    this.saveTaskEmitter.emit(task);
  }

  cancel() {
    this.cancelEditEmitter.emit(false);
  }
}
