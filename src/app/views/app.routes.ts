import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { TimerComponent } from './timer/timer.component';
import { HomeComponent } from './home/home.component';
import { Timer2Component } from './advanced/advanced.component';
import { TasksComponent } from './lista-tareas/lista-tareas.component';


// Rutas
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'timerBasic', component: TimerComponent },
  { path: 'timerAdv', component: Timer2Component  },
  { path: 'listTareas', component: TasksComponent  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
