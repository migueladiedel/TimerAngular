import { Task } from '../Models/Task';

// Servicio de Datos Locales
export class TaskService {
  private tasks: Task[] = [];
  public list() {
    this.tasks = [
        {
          id: 0,
          name: 'Preparar guión Videotutorial',
          deadline: new Date('03 Nov 2016'),
          queued: false,
          tareasRequeridas: 2
        }, {
          id: 1,
          name: 'Buscar imágenes y videos',
          deadline: new Date('03 Nov 2016'),
          queued: true,
          tareasRequeridas: 1
        }, {
          id: 2,
          name: 'Grabación Completa',
          deadline: new Date('04 Nov 2016'),
          queued: false,
          tareasRequeridas: 2
        }, {
          id: 3,
          name: 'Edición y Producción',
          deadline: new Date('05 Nov 2016'),
          queued: false,
          tareasRequeridas: 3
        }
      ];
  }
  public get Listado(): Task[] { return this.tasks; }
  /*
  public getName(id: number): string { return this.tasks[id].name; }
  public getDeadline(id: number): Date { return this.tasks[id].deadline; }
  public getQueued(id: number): boolean { return this.tasks[id].queued; }
  public getTareasRequeridas(id: number): number { return this.tasks[id].tareasRequeridas; }
  public setQueued(id: number) { this.tasks[id].queued = !this.tasks[id].queued; }
  public disminTareasRequeridas(id: number) { this.tasks[id].tareasRequeridas = --this.listado[id].tareasRequeridas; }
  public aumeTareasRequeridas(id: number) { this.tasks[id].tareasRequeridas = ++this.listado[id].tareasRequeridas; }
  */
  constructor() {
  }
}
