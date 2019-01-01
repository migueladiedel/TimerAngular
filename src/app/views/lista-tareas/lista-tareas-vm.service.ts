import { Task } from "../../models/Task";


// Servicio de Datos Locales
export class TaskService {
  private listado: Task[] = [];
  public list() {
    this.listado = [
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
          queued: true,
          tareasRequeridas: 2
        }, {
          id: 3,
          name: 'Edición y Producción',
          deadline: new Date('05 Nov 2016'),
          queued: false,
          tareasRequeridas: 5
        }
      ];
  }
  public get Listado(): Task[] { return this.listado; }
  public setQueued(id: number) { this.listado[id].queued = !this.listado[id].queued; }
  
}
