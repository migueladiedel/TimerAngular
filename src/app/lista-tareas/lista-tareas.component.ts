import {
  Component,
  OnInit
} from '@angular/core';
import { Task } from './Task';
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
  tasks: any = [];
  constructor(private taskService: TaskService) {
    this.today = new Date();
  }
  public get VM() { return this.taskService; }
  ngOnInit() {
    this.listTasks();
    this.today = new Date();
  }
  toggleTask(taskId: number): void {
    this.taskService.setQueued(taskId);
  }
  private actualizarTareasEnCola(): void {
    this.queuedTareas = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tareas: number, queuedTask: Task) => {
      return tareas + queuedTask.tareasRequeridas;
    }, 0);
  }

  aum(taskId: number): void {
    this.taskService.aumeTareasRequeridas(taskId);
  }
  dism(taskId: number): void {
    this.taskService.disminTareasRequeridas(taskId);
  }

  private listTasks() {
    // Cargamos el array
    this.taskService.list();
    // Recogemos datos del array
    this.tasks = this.VM;
  }
}
