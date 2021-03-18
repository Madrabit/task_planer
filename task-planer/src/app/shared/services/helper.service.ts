import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public beautifyDate(date: string,  srcFormat = 'DD-MM-YYYY', destFormat = 'DD MM YYYY'): string {
    return moment(date, srcFormat).format(destFormat);
  }

}
