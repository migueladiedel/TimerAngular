import {
  Component,
  OnInit
} from '@angular/core';
import { Task } from '../Models/Task';
import { TaskService } from './lista-tareas-vm.service';

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
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    
  }
  public get VM() { return this.taskService; }
  ngOnInit() {
    // Cargamos el array
    this.taskService.list();
    // Recogemos datos del array
    this.tasks = this.VM.Listado;
    this.today = new Date();
    this.actualizarTareasEnCola();
  }
  toggleTask(taskId: number): void {
    this.tasks[taskId].queued = !this.tasks[taskId].queued;
    this.actualizarTareasEnCola();
  }
  private actualizarTareasEnCola(): void {
    this.queuedTareas = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tareas: number, queuedTask: Task) => {
      return tareas + queuedTask.tareasRequeridas;
    }, 0);    
  }

  eventMouseOver(task){
    console.log(task.name);
  }
  eventMouseOut(task){
    console.log('Ratón encima para detalles');
  }
 

  /* aum(taskId: number): void {
    this.taskService.aumeTareasRequeridas(taskId);
  }
  dism(taskId: number): void {
    this.taskService.disminTareasRequeridas(taskId);
  } */

  
  
}
