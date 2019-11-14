import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsStoreService } from '../../../notifications/notifications-store.service';
import { ReversePipe } from '../../../shared/reverse.pipe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ReversePipe]
})
export class FooterComponent implements OnInit {
  public notificaciones$: Observable<any>;

  constructor(
    private notificationsStoreService: NotificationsStoreService,
    public reverse: ReversePipe
  ) {}

  ngOnInit() {
    this.notificaciones$ = this.notificationsStoreService.select$();
  }
}
