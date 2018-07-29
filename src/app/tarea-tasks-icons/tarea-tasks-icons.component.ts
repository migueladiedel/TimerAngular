import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Models/Task';

@Component({
  selector: 'tarea-tasks-icons',
  templateUrl: './tarea-tasks-icons.component.html',
  styleUrls: ['./tarea-tasks-icons.component.css']
})
export class TareaTasksIconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  @Input() numTareas: number;
  icons: Object[];
  
  constructor() { 
    this.icons = [];
   }

  ngOnInit() {
    for (let i = 0; i < this.numTareas; i++) {
      this.icons.push({ name: this.task.name })
      
    }
  }

}
