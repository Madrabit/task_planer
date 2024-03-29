import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Task } from '../../../shared/model/task.model';
import { TaskService } from '../../../shared/services/task.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
  providers: [HelperService]
})
export class ListRowComponent implements OnInit {

  @Input() id = 0
  @Input() name = 'Название 10'
  @Input() category = 'Категория 10'
  @Input() dateStart = '18:15 08-10-2018'
  @Input() dateEnd = '20:15 08-10-2018'
  @Input() status = 'Завершено'

  @Output() deleteTaskEmitter = new EventEmitter<string>()
  @Output() editTaskEmitter = new EventEmitter<number>()

  constructor(public helperService: HelperService,  private router: Router) {
  }

  ngOnInit(): void {

  }

  deleteTask() {
    this.deleteTaskEmitter.emit(this.name)
  }

  editTask() {
    this.editTaskEmitter.emit(this.id);
    this.router.navigate(['tasks', this.id]);
  }
}
