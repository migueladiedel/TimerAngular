import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimerComponent } from './timer/timer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AdvancedComponent, Timer2Component } from './advanced/advanced.component';
import { TasksComponent } from './lista-tareas/lista-tareas.component';
import { TaskService } from './lista-tareas/lista-tareas-vm.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TimerComponent,
    MenuComponent,
    HomeComponent,
    AdvancedComponent, Timer2Component, TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
