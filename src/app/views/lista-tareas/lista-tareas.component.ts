import {  Component, OnInit } from '@angular/core';
import { TaskService } from './lista-tareas-vm.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})

export class TasksComponent implements OnInit {
  queuedTareas: number;
  queueHeaderMapping: any = {    
    '=0': 'Sin tareas',
    '=1': 'Una tarea',
    'other': '# tareas'
  };
  today: Date;
  tiempoEstimadoTareas: string;
  salidaTooltip: string;
  constructor(private taskService: TaskService) {
    this.today = new Date();
  }
  public get VM() { return this.taskService; }
  tasks: any[];

  ngOnInit() {
    this.listTasks();
    this.today = new Date();
    this.actualizarTareasEnCola();    
  }
  toggleTask(taskId: number): void {
    this.taskService.setQueued(taskId);
    this.tasks = this.VM.Listado;
    this.actualizarTareasEnCola();    
  }
  private actualizarTareasEnCola(): void {
    this.queuedTareas = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tareas: number, queuedTask: Task) => {
      return tareas + queuedTask.tareasRequeridas;
    }, 0);    
    this.tiempoEstimadoTareas = this.dateToHMS(new Date( this.queuedTareas * 1500000 ));    
  }
  private listTasks() {
    // Cargamos el array
    this.taskService.list();
    // Recogemos datos del array
    this.tasks = this.VM.Listado
  }

  dateToHMS(date: Date) {
    const h = date.getHours() - 1;
    const m = date.getMinutes(); 
    const s = date.getSeconds();
    return (h <= 9 ? '0' + h : h)  + ':' + (m <= 9 ? '0' + m : m) + ':' + (s <= 9 ? '0' + s : s);
  }  

  eventMouseOver(task){
    this.salidaTooltip = task.name;
  }
  eventMouseOut(){
    this.salidaTooltip = 'Ratón encima para detalles';
  }
    
}