import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss']
})
export class ListRowComponent implements OnInit {

  name = 'Название 10'
  category = 'Категория 10'
  dateStart = '18:15 08-10-2018'
  dateEnd = '20:15 08-10-2018'
  status = 'Завершено'

  constructor() { }

  ngOnInit(): void {
  }

}
