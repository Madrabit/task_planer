import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { EditTaskComponent } from './task/task-list/edit-task/edit-task.component';
import { NoteListComponent } from './note-list/note-list.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {
    path: 'tasks',
    data: { permission: 'Tasks' },
    canActivateChild: [AuthGuardService],
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
