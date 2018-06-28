import { Task } from './Task';

// Servicio de Datos Locales
export class TaskService {
  private listado: Task[] = [];
  public list() {
    this.listado = [
        {
          id: 0,
          name: 'Preparar guión Videotutorial',
          deadline: new Date('03 Nov 2016'),
          queued: true,
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
          queued: true,
          tareasRequeridas: 2
        }, {
          id: 3,
          name: 'Edición y Producción',
          deadline: new Date('05 Nov 2016'),
          queued: true,
          tareasRequeridas: 0
        }
      ];
  }
  public get Listado(): Task[] { return this.listado; }
  public getName(id: number): string { return this.listado[id].name; }
  public getDeadline(id: number): Date { return this.listado[id].deadline; }
  public getQueued(id: number): boolean { return this.listado[id].queued; }
  public getTareasRequeridas(id: number): number { return this.listado[id].tareasRequeridas; }
  public setQueued(id: number) { this.listado[id].queued = !this.listado[id].queued; }
  public disminTareasRequeridas(id: number) { this.listado[id].tareasRequeridas = --this.listado[id].tareasRequeridas; }
  public aumeTareasRequeridas(id: number) { this.listado[id].tareasRequeridas = ++this.listado[id].tareasRequeridas; }
  constructor() {
  }
}
