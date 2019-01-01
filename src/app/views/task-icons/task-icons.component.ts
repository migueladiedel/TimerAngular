import { Component, OnInit, Input  } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'task-icons',
  templateUrl: './task-icons.component.html',
  styleUrls: ['./task-icons.component.css']
})
export class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  @Input() numTareas: number;
  icons: Object[] = [];
  
  constructor() { }

  ngOnInit() {
    this.icons.length = this.task.tareasRequeridas;
    this.icons.fill({ name: this.task.name });
  }
}
