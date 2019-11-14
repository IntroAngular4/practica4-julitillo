import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsStoreService {
  private notificaciones: string[] = [];
  private notificaciones$ = new BehaviorSubject<string[]>([]);

  constructor() {}

  public select$ = () => this.notificaciones$.asObservable();

  public dispatch(notificacion) {
    this.notificaciones.push(notificacion);
    this.notificaciones$.next(this.notificaciones);
  }
}
