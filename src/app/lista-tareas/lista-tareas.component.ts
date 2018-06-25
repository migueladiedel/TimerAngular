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
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    this.today = new Date();
  }
  public get VM() { return this.taskService; }
  ngOnInit() {
    this.taskService.list();
    this.today = new Date();
  }
  toggleTask(taskId: number): void {
    console.log(this.tasks[ taskId ]);
    this.tasks[ taskId ].queued = !this.tasks[ taskId ].queued;
  }
  private actualizarTareasEnCola(): void {
    this.queuedTareas = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((tareas: number, queuedTask: Task) => {
      return tareas + queuedTask.tareasRequeridas;
    }, 0);
  }
}
