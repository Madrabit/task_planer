import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss']
})
export class ListRowComponent implements OnInit {

  @Input() name = 'Название 10'
  @Input() category = 'Категория 10'
  @Input() dateStart = '18:15 08-10-2018'
  @Input() dateEnd = '20:15 08-10-2018'
  @Input() status = 'Завершено'

  @Output() deleteTaskEmitter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }


  deleteTask() {
    this.deleteTaskEmitter.emit(this.name)
  }
}
