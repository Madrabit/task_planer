import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: "full"},
  {path: 'tasks', component: TaskListComponent},
  {path: 'notes', component: NoteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
