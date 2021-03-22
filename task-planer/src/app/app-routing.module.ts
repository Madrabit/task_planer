import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { EditTaskComponent } from './task/task-list/edit-task/edit-task.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: "full"},
  {
    path: 'tasks',
    data: { permission: 'Tasks' },
    children: [
      { path: '', component: TaskListComponent },
      { path: ':id', component: EditTaskComponent, data: { someData: 'someValue' } }
    ]
  }
  ,
  {path: 'notes', component: NoteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
