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
          tareasRequeridas: 3
        }
      ];
  }
  public get Listado() { return this.listado; }
  constructor() {
  }
}
