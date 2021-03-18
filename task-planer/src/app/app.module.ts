import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { ListRowComponent } from './task-list/list-row/list-row.component';
import { FormsModule } from '@angular/forms';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { LogDirective } from './shared/directives/log.directive';
import { MyTitleCasePipe } from './shared/pipes/my-title-case.pipe';
import { DateDirective } from './shared/directives/date.directive';
import { TaskService } from './shared/services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    EditTaskComponent,
    LogDirective,
    MyTitleCasePipe,
    DateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
