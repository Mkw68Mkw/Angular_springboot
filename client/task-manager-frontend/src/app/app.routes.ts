import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },  
  { path: 'create', component: CreateTaskComponent },
  // { path: '**', component: PageNotFoundComponent } // Für 404 Seite
];
